import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction,
} from "react-router";
import { data as json } from "react-router";
import { useLoaderData } from "react-router";
import invariant from "tiny-invariant";
import { IssueId } from "@domain/issue/issue";
import { ProjectId } from "@domain/project/project";
import { SprintPlanning } from "@domain/sprint/sprint";
import {
  completeSprint,
  getSprintPlanning,
  setIssueInSprint,
  startSprint,
} from "@infrastructure/db/sprint";
import { Error500 } from "@app/components/error-500/error-500";
import { SprintPlanningView } from "@app/ui/main/project/sprint-planning/sprint-planning.view";
import { EVENTS } from "@app/events/events";
import { emitter } from "@app/events/emitter.server";
import { formatTags, formatProperties } from "@utils/meta";

const sprintActions = ["start", "complete", "addToSprint", "removeFromSprint"] as const;

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) return [];
  const title = "Jira clone - Sprint planning";
  const description =
    "Plan the project's sprint. Commit the issues the team can take, and see how they fit the sprint capacity.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${params.projectId}/sprint-planning`;

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = {
  planning: SprintPlanning;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.projectId, `params.projectId is required`);

  const planning = await getSprintPlanning(params.projectId as ProjectId);

  if (!planning) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({ planning });
};

export type ActionData = {
  action?: string;
  error?: string;
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  if (!sprintActions.includes(_action as (typeof sprintActions)[number])) {
    throw new Error(
      `Invalid action: '${_action}'. Expected one of ${sprintActions.join(", ")}.`
    );
  }

  try {
    if (_action === "start") await startSprint(projectId);
    if (_action === "complete") await completeSprint(projectId);
    if (_action === "addToSprint") {
      await setIssueInSprint(formData.get("issueId") as IssueId, true);
    }
    if (_action === "removeFromSprint") {
      await setIssueInSprint(formData.get("issueId") as IssueId, false);
    }

    // Starting a sprint changes no issue; the others move one in or out of it.
    if (_action !== "start") {
      emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
    }

    return json<ActionData>({ action: _action }, { status: 201 });
  } catch (error) {
    return json<ActionData>({ error: (error as Error).message }, { status: 500 });
  }
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The sprint planning page failed. Navigate to the board page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function SprintPlanningRoute() {
  const { planning } = useLoaderData() as LoaderData;

  return <SprintPlanningView planning={planning} />;
}

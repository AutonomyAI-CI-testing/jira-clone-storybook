import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction,
} from "react-router";
import { data as json, redirect } from "react-router";
import { useLoaderData, useMatch } from "react-router";
import { ProjectId, ProjectSummary } from "@domain/project/project";
import { getProjectsSummary, deleteProject } from "@infrastructure/db/project";
import { getUserSession } from "@app/session-storage/user-storage.server";
import { ProjectsView } from "@app/ui/main/projects/projects.view";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Projects";
  const description =
    "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/projects";

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
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
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
  projectsSummary: ProjectSummary[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (!userId) {
    return redirect("/login");
  }

  const projectsSummary = await getProjectsSummary(userId);

  return json<LoaderData>({ projectsSummary });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "delete") {
    const projectId = formData.get("projectId") as ProjectId;

    if (projectId) {
      await deleteProject(projectId);
    } else {
      console.error("Project id not found: ", projectId);
    }
  }
  return redirect("/projects");
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mb-6 mt-[200px] text-lg">/projects ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function ProjectsRoute() {
  const { projectsSummary } = useLoaderData() as LoaderData;
  // The projects index is a single full-bleed splash. Child routes
  // (`/projects/new`) keep the regular projects view.
  const isProjectsIndex = Boolean(useMatch("/projects"));

  if (isProjectsIndex) {
    return (
      <div className="grid flex-1 place-items-center bg-black">
        {/* `icon-accent-green` rather than `font-success`: the splash sits on a
            fixed black surface, and this is the green token that stays a true
            green in every theme (`font-success` goes pale in dark/lava/lime). */}
        <h1 className="font-primary-black text-[clamp(4rem,15vw,12rem)] leading-none text-icon-accent-green">
          Fei
        </h1>
      </div>
    );
  }

  return <ProjectsView projectsSummary={projectsSummary} />;
}

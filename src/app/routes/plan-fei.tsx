import type { V2_MetaFunction } from "@remix-run/node";
import { PlanFeiView } from "@app/ui/plan-fei";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Plan Fei";
  const description = "Plan Fei — your AI planning assistant.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
  };

  const properties = {
    "og:type": "website",
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}

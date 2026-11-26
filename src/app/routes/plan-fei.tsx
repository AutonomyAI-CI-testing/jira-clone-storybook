import type { MetaFunction } from "react-router";
import { PlanFeiView } from "@app/ui/plan-fei";
import { formatTags } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Plan fei";
  const description = "Plan fei.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  return [{ title }, ...formatTags(tags)];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}

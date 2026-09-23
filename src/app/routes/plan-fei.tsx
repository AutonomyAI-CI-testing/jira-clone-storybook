import type { V2_MetaFunction } from "@remix-run/node";
import { PlanFeiView } from "@app/ui/plan-fei";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Plan Fei";

  return [{ title }];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}

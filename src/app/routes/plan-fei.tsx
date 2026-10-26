import type { MetaFunction } from "react-router";
import { PlanFeiView } from "@app/ui/plan-fei";

export const meta: MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}

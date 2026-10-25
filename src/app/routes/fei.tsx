import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei/fei.view";

export const meta: MetaFunction = () => {
  return [{ title: "Jira clone - Fei" }];
};

export default function FeiRoute() {
  return <FeiView />;
}

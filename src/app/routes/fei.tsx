import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei";

export const meta: MetaFunction = () => [{ title: "Jira clone - Fei" }];

export default function FeiRoute() {
  return <FeiView />;
}

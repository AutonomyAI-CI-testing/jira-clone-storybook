import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei/fei.view";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Fei";

  return [{ title }];
};

export default function FeiRoute() {
  return <FeiView />;
}

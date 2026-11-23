import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei";

export const meta: MetaFunction = () => {
  const title = "Fei";
  const description = "Fei.";

  return [{ title }, { name: "description", content: description }];
};

export default function FeiRoute() {
  return <FeiView />;
}

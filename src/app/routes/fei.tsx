import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei";

export const meta: MetaFunction = () => {
  const title = "Fei";

  return [{ title }];
};

export default function FeiRoute() {
  return <FeiView />;
}

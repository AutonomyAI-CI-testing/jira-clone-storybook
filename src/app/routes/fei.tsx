import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => {
  const title = "Fei";

  return [{ title }];
};

export default function FeiRoute() {
  return <FeiView />;
}

import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei/fei.view";

export const meta: V2_MetaFunction = () => [{ title: "Fei" }];

export default function FeiPage() {
  return <FeiView />;
}

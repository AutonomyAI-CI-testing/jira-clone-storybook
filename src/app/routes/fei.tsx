import type { V2_MetaFunction } from "@remix-run/node";
import { FeiPageView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return <FeiPageView />;
}

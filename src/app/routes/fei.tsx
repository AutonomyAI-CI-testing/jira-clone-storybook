import type { V2_MetaFunction } from "@remix-run/node";
import { FeiPage } from "@app/components/fei-page";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return <FeiPage />;
}

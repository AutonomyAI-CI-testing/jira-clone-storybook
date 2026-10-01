import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page, deliberately outside the __main layout so no header or
// sidebar wraps it.
export default function FeiRoute() {
  return <FeiView />;
}

import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => [{ title: "Fei" }];

// Standalone page, outside the main layout on purpose: no header, no sidebar.
export default function FeiRoute() {
  return <FeiView />;
}

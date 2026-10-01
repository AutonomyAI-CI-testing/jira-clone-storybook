import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => [{ title: "Fei" }];

// Standalone page: intentionally rendered outside the app shell so it
// contains nothing but the word itself.
export default function FeiRoute() {
  return <FeiView />;
}

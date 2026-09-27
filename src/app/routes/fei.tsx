import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";

export const meta: V2_MetaFunction = () => [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { title: "Fei" },
];

export default function FeiRoute() {
  return <FeiView />;
}

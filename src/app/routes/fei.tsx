import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei/fei.view";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return <FeiView />;
}

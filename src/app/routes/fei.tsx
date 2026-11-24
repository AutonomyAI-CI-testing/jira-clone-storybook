import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return <FeiView />;
}

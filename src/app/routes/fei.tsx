import type { MetaFunction } from "react-router";
import { FeiPageView } from "@app/ui/fei-page";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return <FeiPageView />;
}

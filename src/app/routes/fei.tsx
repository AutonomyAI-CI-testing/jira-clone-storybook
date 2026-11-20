import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { viewport: "width=device-width,initial-scale=1" },
    { title: "Fei" },
  ];
};

export default function FeiRoute() {
  return <FeiView />;
}

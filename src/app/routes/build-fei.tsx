import type { MetaFunction } from "react-router";
import { BuildFeiView } from "@app/ui/build-fei";

export const meta: MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

export default function BuildFeiRoute() {
  return <BuildFeiView />;
}

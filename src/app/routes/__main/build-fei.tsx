import type { V2_MetaFunction } from "@remix-run/node";
import { BuildFeiView } from "@app/ui/main/build-fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

export default function BuildFeiRoute() {
  return <BuildFeiView />;
}

import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei/fei.view";
import { formatTags } from "@utils/meta";

export const meta: MetaFunction = () => {
  return [
    { title: "Fei" },
    ...formatTags({
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
    }),
  ];
};

export default function FeiRoute() {
  return <FeiView />;
}

import type { MetaFunction } from "react-router";
import { FeiView } from "@app/ui/fei/fei.view";
import { formatTags } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Fei";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
  };

  return [{ title }, ...formatTags(tags)];
};

export default function FeiRoute() {
  return <FeiView />;
}

import type { MetaFunction } from "react-router";
import { formatTags } from "@utils/meta";
import { FeiView } from "@app/ui/fei/fei.view";

export const meta: MetaFunction = () => {
  const title = "Fei";
  const description = "A page with a white background that shows Fei.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  return [{ title }, ...formatTags(tags)];
};

export default function FeiRoute() {
  return <FeiView />;
}

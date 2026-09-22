import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";
import { formatTags } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
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

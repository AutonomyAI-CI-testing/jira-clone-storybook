import type { V2_MetaFunction } from "@remix-run/node";
import { BuildFeiView } from "@app/ui/build-fei";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Build Fei";
  const description = "Fei is ready to build whatever comes next.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:type": "website",
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function BuildFeiRoute() {
  return <BuildFeiView />;
}

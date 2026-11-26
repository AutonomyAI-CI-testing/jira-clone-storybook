import type { MetaFunction } from "react-router";
import { BuildFeiView } from "@app/ui/build-fei/build-fei.view";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Build fei";
  const description = "Build fei.";
  const url = "https://jira-clone.fly.dev/build-fei";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function BuildFeiRoute() {
  return <BuildFeiView />;
}

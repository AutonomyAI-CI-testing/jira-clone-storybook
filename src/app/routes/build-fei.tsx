import type { V2_MetaFunction } from "@remix-run/node";
import { BuildFeiView } from "@app/ui/build-fei";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Build Fei";
  const description = "Build Fei.";
  const url = "https://jira-clone.fly.dev/build-fei";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
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

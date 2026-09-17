import type { V2_MetaFunction } from "@remix-run/node";
import { FeiView } from "@app/ui/fei";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Fei";
  const description = "Fei";
  const url = "https://jira-clone.fly.dev/fei";

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

export default function FeiRoute() {
  return <FeiView />;
}

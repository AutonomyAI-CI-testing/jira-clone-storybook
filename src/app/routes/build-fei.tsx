import type { MetaFunction } from "react-router";
import { BuildFeiView } from "@app/ui/build-fei";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Build Fei";
  const description = "Build Fei.";

  return [
    { title },
    ...formatTags({ description }),
    ...formatProperties({ "og:title": title, "og:description": description }),
  ];
};

export default function BuildFeiRoute() {
  return <BuildFeiView />;
}

import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Page Not Found";
  const description = "The page you're looking for doesn't exist.";
  const url = "https://jira-clone.fly.dev/404";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function NotFound404Route() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Error404
        message="Page not found. Go to the main page"
        href="/projects"
      />
    </div>
  );
}

import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jira clone - Not found" }];
};

export default function NotFound404Route() {
  return (
    <div className="flex h-full items-center justify-center">
      <Error404
        message="This page does not exist. Go to the projects page"
        href="/projects"
      />
    </div>
  );
}

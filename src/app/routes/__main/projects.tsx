import type { MetaFunction } from "react-router";
import { ProjectsView } from "@app/ui/main/projects/projects.view";

export const meta: MetaFunction = () => {
  return [{ title: "Jira clone - Projects" }];
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mb-6 mt-[200px] text-lg">/projects ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function ProjectsRoute() {
  return <ProjectsView />;
}

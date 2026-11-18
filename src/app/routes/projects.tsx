import type { MetaFunction } from "react-router";
import { ProjectsView } from "@app/ui/main/projects/projects.view";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function ProjectsRoute() {
  return <ProjectsView />;
}

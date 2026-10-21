import type { MetaFunction } from "react-router";
import { McpView } from "@app/ui/mcp";

export const meta: MetaFunction = () => {
  return [{ title: "Jira clone - M-C-P" }];
};

export default function McpRoute() {
  return <McpView />;
}

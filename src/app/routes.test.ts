import { expect, it } from "vitest";
import routes from "./routes";

interface RouteEntry {
  path?: string;
  index?: boolean;
  file?: string;
  children?: RouteEntry[];
}

const routeTable = (entries: RouteEntry[]): Array<{ path: string; file: string }> =>
  entries.flatMap((entry) => [
    {
      path: entry.index ? "(index)" : (entry.path ?? "(layout)"),
      file: entry.file ?? "",
    },
    ...(entry.children ? routeTable(entry.children) : []),
  ]);

it("registers /plan-fei and leaves every other route as it was", () => {
  expect(routeTable(routes as unknown as RouteEntry[])).toEqual([
    { path: "(index)", file: "routes/index.tsx" },
    { path: "login", file: "routes/login.tsx" },
    { path: "action/logout", file: "routes/action/logout.tsx" },
    { path: "action/set-theme", file: "routes/action/set-theme.tsx" },
    { path: "plan-fei", file: "routes/plan-fei.tsx" },
    { path: "(layout)", file: "routes/__main.tsx" },
    { path: "projects", file: "routes/__main/projects.tsx" },
    { path: "new", file: "routes/__main/projects/new.tsx" },
    { path: "projects/:projectId", file: "routes/__main/projects.$projectId.tsx" },
    { path: "analytics", file: "routes/__main/projects.$projectId/analytics.tsx" },
    { path: "board", file: "routes/__main/projects.$projectId/board.tsx" },
    { path: "issue/new", file: "routes/__main/projects.$projectId/board/issue/new.tsx" },
    { path: "issue/:issueId", file: "routes/__main/projects.$projectId/board/issue/$issueId.tsx" },
    { path: "server-error", file: "routes/__main/projects.$projectId/server-error.tsx" },
    { path: "*", file: "routes/__main/projects.$projectId/$.tsx" },
    { path: "*", file: "routes/404.tsx" },
  ]);
});

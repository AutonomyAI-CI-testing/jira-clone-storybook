import type { LoaderFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

if (typeof window === "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { redirect } = require("@remix-run/node");
  exports.loader = async ({ request }: Parameters<LoaderFunction>[0]) => {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return redirect("projects");
    }
    return null;
  };
}

// Landing page with white background and Fei text
export default function IndexRoute() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <h1 className="text-6xl font-primary-black text-font-danger">Fei</h1>
    </div>
  );
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}

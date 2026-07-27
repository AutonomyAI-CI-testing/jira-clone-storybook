import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserSession } from "@app/session-storage/user-storage.server";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";

type LoaderData = {
  isAuthenticated: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();
  return json<LoaderData>({ isAuthenticated: Boolean(userId) });
};

// Landing / welcome page
export default function IndexRoute() {
  const { isAuthenticated } = useLoaderData<LoaderData>();
  return <WelcomeView isAuthenticated={isAuthenticated} />;
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

import { LandingView } from "@app/ui/landing";
import { Error404 } from "@app/components/error-404/error-404";

export default function IndexRoute() {
  return <LandingView />;
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

import type { MetaFunction } from "react-router";
import { Error404 } from "@app/components/error-404/error-404";

export const meta: MetaFunction = () => {
  return [{ title: "Jira clone - Not found" }];
};

export default function NotFound404Route() {
  return (
    <div className="flex h-full items-center justify-center">
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}

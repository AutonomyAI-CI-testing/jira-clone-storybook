import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route can take over the whole viewport by setting `hideHeader` on its
  // `handle`, in which case the shared header is not rendered at all.
  const routeHandle = matches[matches.length - 1]?.handle as
    | RouteHandle
    | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {routeHandle?.hideHeader ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

interface RouteHandle {
  hideHeader?: boolean;
}

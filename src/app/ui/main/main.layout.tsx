import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  hideChrome?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();

  // A route opts out of the app chrome by exporting
  // `handle = { hideChrome: true }`. Such a page fills the window on its own,
  // with no header rendered above it.
  const hideChrome = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.hideChrome
  );

  return (
    <UserContextProvider user={user}>
      {hideChrome ? (
        <Outlet />
      ) : (
        <div className="flex h-full flex-col">
          <Header />
          <Outlet />
        </div>
      )}
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

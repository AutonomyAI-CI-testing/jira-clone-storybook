import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export type RouteHandle = {
  /** Set by a route that takes over the whole page, so the app chrome is hidden. */
  hideHeader?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const hideHeader = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const showHeader = !matches.some(
    (match) => (match.handle as MainLayoutHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {showHeader ? <Header /> : null}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

/**
 * Handle a route declares to opt out of the app chrome. A page that owns the
 * whole viewport sets `hideHeader` so the header is not rendered behind it.
 */
export interface MainLayoutHandle {
  hideHeader?: boolean;
}

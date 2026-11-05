import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const hideHeader = useMatches().some(
    (match) => (match.handle as MainLayoutHandle | undefined)?.hideHeader
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

/**
 * Route handle for pages that own the whole viewport: a route module exports
 * `handle = { hideHeader: true }` and the shared header is left out of the shell.
 */
export interface MainLayoutHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

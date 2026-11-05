import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const handle = matches[matches.length - 1]?.handle as
    MainLayoutHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!handle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

/**
 * A route module opts out of the shared header by exporting
 * `handle: MainLayoutHandle = { hideHeader: true }`.
 */
export interface MainLayoutHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

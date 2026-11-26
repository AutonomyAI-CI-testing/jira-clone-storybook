import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route may take over the whole viewport by setting `hideHeader` on its
  // `handle`, in which case the shared header is not rendered at all.
  const showHeader = matches.every(
    (match) => (match.handle as RouteHandle | undefined)?.hideHeader !== true
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {showHeader && <Header />}
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

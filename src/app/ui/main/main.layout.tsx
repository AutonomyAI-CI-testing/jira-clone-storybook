import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Only the route the user is on decides: a page can claim the whole viewport
  // with `handle.hideHeader`, and its child routes keep the header.
  const handle = matches.at(-1)?.handle as RouteHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!handle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface RouteHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

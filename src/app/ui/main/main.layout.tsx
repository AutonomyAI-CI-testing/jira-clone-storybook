import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  hideHeader?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route can take over the whole viewport by asking for the header to be
  // hidden, instead of the layout hard-coding a list of paths.
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

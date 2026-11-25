import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  hideHeader?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route can take over the whole viewport by declaring `handle.hideHeader`,
  // so the shell's header does not sit on top of a full-page view.
  const leafHandle = matches.at(-1)?.handle as RouteHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!leafHandle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  // A route that owns the whole viewport sets this in its `handle`.
  fullBleed?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const isFullBleed = useMatches().some(
    (match) => (match.handle as RouteHandle | undefined)?.fullBleed
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullBleed && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

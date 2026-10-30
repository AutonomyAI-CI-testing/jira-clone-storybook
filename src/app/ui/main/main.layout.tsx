import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  bare?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route sets `handle.bare` when it should fill the screen on its own,
  // without the app header.
  const isBarePage = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.bare === true
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isBarePage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

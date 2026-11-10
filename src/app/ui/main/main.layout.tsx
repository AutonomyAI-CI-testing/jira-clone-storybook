import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const isFullPage = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.fullPage
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullPage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface RouteHandle {
  /** The route renders on its own, without the app header. */
  fullPage?: boolean;
}

interface Props {
  user: User;
}

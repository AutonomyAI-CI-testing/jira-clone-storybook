import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

type RouteHandle = {
  fullScreen?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const isFullScreen = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.fullScreen
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullScreen && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const isHeaderHidden = Boolean(
    (matches.at(-1)?.handle as RouteHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isHeaderHidden && <Header />}
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

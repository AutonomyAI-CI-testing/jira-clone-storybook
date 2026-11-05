import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // The leaf match decides, so a nested child route keeps the header even when
  // its parent opts out of it.
  const leafHandle = matches[matches.length - 1]?.handle as
    MainLayoutHandle | undefined;

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

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

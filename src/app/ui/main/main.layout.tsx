import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Read the leaf match only: a `some()` over every match would hand the
  // opt-out down to nested children (e.g. /projects/new), which keep the
  // header.
  const handle = matches[matches.length - 1]?.handle as
    MainLayoutHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!handle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

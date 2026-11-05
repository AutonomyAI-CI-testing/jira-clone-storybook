import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// A route can opt out of the app header by exporting
// `handle = { hideHeader: true }` from its route module.
export interface MainLayoutHandle {
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  // Read the leaf match only: `.some()` over every match would also strip the
  // header from nested routes such as /projects/new.
  const matches = useMatches();
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

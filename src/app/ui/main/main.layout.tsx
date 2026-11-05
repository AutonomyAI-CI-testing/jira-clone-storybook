import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Read the handle off the leaf match so a route that hides the header does not
  // also hide it from its nested children.
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

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

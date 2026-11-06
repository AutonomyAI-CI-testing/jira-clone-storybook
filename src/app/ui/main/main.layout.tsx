import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export interface MainLayoutHandle {
  /** Renders the route with no app header, for a full-bleed screen. */
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Read the leaf match only: a handle on a parent route would propagate down
  // and strip the header from nested pages such as /projects/new.
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

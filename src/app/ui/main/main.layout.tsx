import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

/**
 * A route module can export a `handle` of this shape to control the layout
 * around it. `chrome: false` renders the route without the app header.
 */
export interface RouteHandle {
  chrome?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const hideChrome = useMatches().some(
    (match) => (match.handle as RouteHandle | undefined)?.chrome === false
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hideChrome && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

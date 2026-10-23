import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

/**
 * UI flags a route module can declare through its `handle` export, so a
 * single screen can opt out of the shared app chrome.
 */
export interface MainLayoutHandle {
  /** Render the route without the app header, for full-bleed screens. */
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const hideHeader = useMatches().some(
    (match) => (match.handle as MainLayoutHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

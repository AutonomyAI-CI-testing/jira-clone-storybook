import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// A route can opt out of the app header by exporting
// `handle: MainLayoutHandle = { hideHeader: true }` — for a page that fills the
// viewport on its own and brings no app chrome.
export interface MainLayoutHandle {
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // The leaf match's handle, so a nested child route (e.g. /projects/new) keeps
  // the header even when its parent opted out.
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

import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route can declare `handle: { hideHeader: true }` to own the whole
  // viewport instead of rendering inside the app shell (the projects page is a
  // single full-screen title).
  const hidesHeader = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hidesHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

export interface RouteHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

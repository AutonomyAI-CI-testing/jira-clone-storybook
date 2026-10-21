import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A route can opt out of the app chrome by exporting a `handle` with
  // `chromeless: true`, so it renders full-bleed without the header.
  const isChromeless = matches.some(
    (match) => (match.handle as RouteHandle | undefined)?.chromeless
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isChromeless && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

interface RouteHandle {
  chromeless?: boolean;
}

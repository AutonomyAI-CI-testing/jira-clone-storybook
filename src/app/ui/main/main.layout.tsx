import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// The projects page is a full-bleed screen of its own, so it renders without
// the app header.
const CHROMELESS_ROUTE_ID = "routes/__main/projects";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const isChromeless = matches.some(
    (match) => match.id === CHROMELESS_ROUTE_ID
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

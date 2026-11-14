import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// The projects screen is a full-bleed splash that owns the whole viewport, so
// the shell renders no chrome around it or its child routes.
const FULL_BLEED_ROUTE_ID = "routes/__main/projects";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const isFullBleed = matches.some((match) => match.id === FULL_BLEED_ROUTE_ID);

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullBleed && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  // The projects page is a full-bleed splash, so the app header stays out of
  // it and nothing competes with what the page shows.
  const isFullBleed = pathname === "/projects";

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

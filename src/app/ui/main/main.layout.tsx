import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  // The projects index is a full-bleed page, so it renders without the header.
  const isFullBleedPage =
    pathname === "/projects" || pathname === "/projects/new";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isFullBleedPage ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

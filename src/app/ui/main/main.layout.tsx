import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// The projects page is a full-page screen, so it renders without the header.
const PROJECTS_PAGE = /^\/projects\/?$/;

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const showHeader = !PROJECTS_PAGE.test(pathname);

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {showHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

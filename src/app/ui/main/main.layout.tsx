import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// The projects page is a full-page screen of its own, so it is rendered
// without the app header.
const FULL_PAGE_ROUTES = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const showHeader = !FULL_PAGE_ROUTES.includes(pathname);

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

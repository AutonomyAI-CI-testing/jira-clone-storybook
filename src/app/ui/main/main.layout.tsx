import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Screens that fill the page themselves and are shown without the app header.
const chromelessPaths = ["/projects", "/projects/new"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const showHeader = !chromelessPaths.includes(pathname);

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

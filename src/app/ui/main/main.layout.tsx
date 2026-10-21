import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Screens that fill the viewport on their own and render without the app header.
const HEADERLESS_ROUTES = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!HEADERLESS_ROUTES.includes(pathname) && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

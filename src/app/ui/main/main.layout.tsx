import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Pages that take over the viewport and render their own surface, with no app
// chrome above them.
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

import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Routes that render their own full-bleed surface, with no app chrome on top.
const CHROMELESS_ROUTES = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!CHROMELESS_ROUTES.includes(pathname) && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

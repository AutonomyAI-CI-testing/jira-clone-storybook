import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Routes that take over the whole viewport and show no app chrome.
const fullScreenRoutes = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const isFullScreenRoute = fullScreenRoutes.includes(pathname);

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isFullScreenRoute ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

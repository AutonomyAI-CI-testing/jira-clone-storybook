import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Routes that paint the whole page themselves and show no app chrome.
const fullPageRoutes = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const route = pathname.replace(/\/+$/, "") || "/";
  const showChrome = !fullPageRoutes.includes(route);

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {showChrome && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

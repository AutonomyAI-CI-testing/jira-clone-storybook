import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Pages that paint their own full-screen surface instead of the app chrome.
const PATHS_WITHOUT_HEADER = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const showHeader = !PATHS_WITHOUT_HEADER.includes(pathname);

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

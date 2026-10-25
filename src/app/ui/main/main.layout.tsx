import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

const PROJECTS_PATH = "/projects";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  // The projects page is a full-page view with no app chrome.
  const showHeader = pathname !== PROJECTS_PATH;

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

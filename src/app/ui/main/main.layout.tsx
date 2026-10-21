import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  // The projects page is a standalone full-bleed screen with no app chrome.
  const isStandalonePage = pathname === "/projects";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isStandalonePage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

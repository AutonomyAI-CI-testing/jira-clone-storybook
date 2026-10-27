import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  // The projects index is a full page splash: it renders no app chrome.
  const isSplash = pathname === "/projects";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isSplash && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

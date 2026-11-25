import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  // The projects list is a full-bleed screen, so it renders with no app chrome.
  const showsHeader = pathname !== "/projects";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {showsHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

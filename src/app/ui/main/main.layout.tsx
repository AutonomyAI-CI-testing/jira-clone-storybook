import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  // The projects route renders a full-bleed page, so it goes without the header.
  const withHeader = pathname !== "/projects";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {withHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

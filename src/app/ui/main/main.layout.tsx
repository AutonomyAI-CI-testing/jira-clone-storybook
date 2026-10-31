import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const isHeaderHidden = pathname === "/projects";

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isHeaderHidden ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

const PROJECTS_ROUTE = "/projects";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const isProjectsRoute = pathname === PROJECTS_ROUTE;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isProjectsRoute && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

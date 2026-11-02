import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const isProjectsPage = useMatch("/projects");

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isProjectsPage ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

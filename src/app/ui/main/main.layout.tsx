import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects page is a full-bleed screen with no chrome of its own.
  const isProjectsPage = useMatch("/projects") !== null;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isProjectsPage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

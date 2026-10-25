import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects route renders its own full-screen surface, so it does not
  // show the app header.
  const isProjectsRoute = Boolean(useMatch("/projects"));

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

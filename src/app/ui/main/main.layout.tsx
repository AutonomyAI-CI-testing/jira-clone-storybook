import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects list is a full-screen surface, so the app header is not
  // rendered there. Nested routes (e.g. /projects/new) keep it.
  const isProjectsList = Boolean(useMatch("/projects"));

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isProjectsList && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

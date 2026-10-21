import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects page is a standalone full-page screen, so the app header is
  // skipped on that route only.
  const isProjectsRoute = useMatch("/projects");

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isProjectsRoute ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

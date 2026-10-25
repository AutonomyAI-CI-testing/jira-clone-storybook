import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects page fills the whole viewport with its own surface, so it
  // renders without the app chrome.
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

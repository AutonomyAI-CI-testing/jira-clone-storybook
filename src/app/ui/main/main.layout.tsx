import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";
import { PROJECTS_PATH } from "./projects";

export const MainLayout = ({ user }: Props) => {
  // The projects index is a splash screen: it hides the app header so the page
  // shows nothing but its own content.
  const isProjectsIndex = useMatch(PROJECTS_PATH);

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isProjectsIndex && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

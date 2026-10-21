import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects index renders its own full-bleed screen, so the header would
  // only be extra chrome on top of it.
  const isProjectsIndex = useMatch("/projects");

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

import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects list is a standalone splash screen, so it renders
  // without the header.
  const isProjectsSplash = useMatch({ path: "/projects", end: true });

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isProjectsSplash && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects index is a full-bleed splash that owns the whole page, so the
  // app chrome (header) is not rendered for it.
  const isProjectsSplash = Boolean(useMatch("/projects"));

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {isProjectsSplash ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects index is a full-screen surface of its own, so the app
  // chrome stays out of the way there.
  const hideHeader = useMatch("/projects") !== null;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

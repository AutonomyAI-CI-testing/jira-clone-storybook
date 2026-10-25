import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects page is a full-bleed screen that shows nothing but its own
  // content, so the app header is not rendered on it.
  const isFullBleedPage = Boolean(useMatch("/projects"));

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullBleedPage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

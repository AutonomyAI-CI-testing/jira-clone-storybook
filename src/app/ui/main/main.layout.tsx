import { Outlet, useMatch } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // The projects index is a full-bleed page and renders without the app chrome.
  const isFullBleedPage = useMatch("/projects") !== null;

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

import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Pages that render their own full-screen surface and hide the app header.
// "/projects/new" is a child of "/projects", so it renders that surface too.
const fullScreenPages = ["/projects", "/projects/new"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();
  const isFullScreenPage = fullScreenPages.includes(
    pathname.replace(/\/+$/, "")
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!isFullScreenPage && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

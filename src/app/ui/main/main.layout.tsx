import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// Pages that own the whole viewport render without the app header.
const CHROMELESS_PATHS = ["/projects"];

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!CHROMELESS_PATHS.includes(pathname) && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

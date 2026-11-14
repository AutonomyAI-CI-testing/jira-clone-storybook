import { Outlet, useLocation } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

// The projects page renders its own full-bleed screen, so it does not use the
// shared app header.
const FULL_BLEED_PATH = "/projects";

export const MainLayout = ({ user }: Props) => {
  const { pathname } = useLocation();

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {pathname !== FULL_BLEED_PATH && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

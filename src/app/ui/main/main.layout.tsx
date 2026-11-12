import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const routeHandle = matches.at(-1)?.handle as
    | { fullscreen?: boolean }
    | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!routeHandle?.fullscreen && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

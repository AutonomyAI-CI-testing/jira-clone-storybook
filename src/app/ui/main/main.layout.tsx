import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // A leaf route can opt out of the header by setting `hideHeader` on its handle.
  const leafHandle = matches[matches.length - 1]?.handle as
    | RouteHandle
    | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!leafHandle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface RouteHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

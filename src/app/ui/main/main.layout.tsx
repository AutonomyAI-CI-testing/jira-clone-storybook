import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const hideHeader = useMatches().some(
    (match) => (match.handle as MainLayoutHandle | undefined)?.hideHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {hideHeader ? null : <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

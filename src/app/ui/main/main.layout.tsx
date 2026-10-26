import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const hideHeader = matches.some(
    (match) => (match.handle as MainLayoutHandle | undefined)?.hideHeader
  );

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

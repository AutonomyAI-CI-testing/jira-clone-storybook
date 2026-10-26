import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const hideAppHeader = matches.some(
    (match) =>
      (match.handle as { hideAppHeader?: boolean } | undefined)?.hideAppHeader
  );

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!hideAppHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

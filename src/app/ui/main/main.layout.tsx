import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  const leafHandle = matches[matches.length - 1]?.handle as
    | { hideHeader?: boolean }
    | undefined;
  const hideHeader = leafHandle?.hideHeader === true;

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

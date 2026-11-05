import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Read the leaf match only: a `.some()` over every match would let a parent
  // route's opt-out hide the header on its nested children too.
  const leafHandle = matches[matches.length - 1]?.handle as
    MainLayoutHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!leafHandle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

export interface MainLayoutHandle {
  hideHeader?: boolean;
}

interface Props {
  user: User;
}

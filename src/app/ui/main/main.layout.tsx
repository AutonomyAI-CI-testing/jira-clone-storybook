import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

export const MainLayout = ({ user }: Props) => {
  // A route can ask for the app chrome to be hidden by exporting
  // `handle = { hideHeader: true }`. Only the matched leaf decides, so nested
  // routes keep the header unless they ask for it themselves.
  const matches = useMatches();
  const leafHandle = matches.at(-1)?.handle as
    | { hideHeader?: boolean }
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

interface Props {
  user: User;
}

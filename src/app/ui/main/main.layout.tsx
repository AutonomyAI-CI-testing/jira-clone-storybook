import { Outlet, useMatches } from "react-router";
import { User } from "@domain/user/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header/header";

/** A route module opts out of the app header by exporting this handle. */
export type MainLayoutHandle = {
  hideHeader?: boolean;
};

export const MainLayout = ({ user }: Props) => {
  const matches = useMatches();
  // Only the leaf route decides, so a child of a header-less route (such as
  // `/projects/new`) still gets the header.
  const handle = matches.at(-1)?.handle as MainLayoutHandle | undefined;

  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        {!handle?.hideHeader && <Header />}
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

import { User } from "@domain/user";
import { LoginBrandPanel } from "./login-brand-panel";
import { LoginFormPanel } from "./login-form-panel";

export const LoginView = ({ users }: Props) => {
  return (
    <div className="login-shell">
      {/* Film-grain overlay */}
      <div className="login-grain" aria-hidden="true" />

      <LoginBrandPanel />
      <LoginFormPanel users={users} />
    </div>
  );
};

interface Props {
  users: User[];
}

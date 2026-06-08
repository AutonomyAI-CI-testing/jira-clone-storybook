import { SignIn } from "@app/components/sign-in";
import { User } from "@domain/user";

export const LoginView = ({ users }: Props) => (
  <SignIn users={users} />
);

interface Props {
  users: User[];
}

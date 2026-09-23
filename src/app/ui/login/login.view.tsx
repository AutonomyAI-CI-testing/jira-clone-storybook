import { User } from "@domain/user";

export const LoginView = (_props: Props) => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
  </div>
);

interface Props {
  users: User[];
}

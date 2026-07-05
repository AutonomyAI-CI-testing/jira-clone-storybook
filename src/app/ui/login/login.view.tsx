import type { User } from "@domain/user";
import { BrandPanel } from "./brand-panel";
import { AuthForm } from "./auth-form";

export const LoginView = ({ users }: Props) => {
  return (
    <main
      className="min-h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr .95fr",
        background: "#121211",
      }}
    >
      <BrandPanel />
      <AuthForm users={users} />

      <style>{`
        @media (max-width: 920px) {
          main {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};

interface Props {
  users: User[];
}

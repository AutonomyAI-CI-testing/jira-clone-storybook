import { User } from "@domain/user";
import { BrandPanel } from "./brand-panel";
import { AuthPanel } from "./auth-panel";

export const LoginView = ({ users }: Props) => {
  return (
    <div
      className="login-shell"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        background: "#0B0B0A",
      }}
    >
      {/* Film grain overlay — signature brand texture */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <BrandPanel />
      <AuthPanel users={users} />

      {/* Responsive: single column below 920px */}
      <style>{`
        @media (max-width: 920px) {
          .login-shell {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

interface Props {
  users: User[];
}

import { User } from "@domain/user";

export const LoginView = ({ users }: Props) => {
  return (
    <div
      style={{
        background: "black",
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "green",
          fontSize: "10rem",
          fontFamily: "CircularStdBlack, sans-serif",
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        Fei
      </span>
    </div>
  );
};

interface Props {
  users: User[];
}

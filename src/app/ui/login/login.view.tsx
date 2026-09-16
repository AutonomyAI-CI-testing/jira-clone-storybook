import { User } from "@domain/user";

export const LoginView = ({ users }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
      }}
    >
      <span style={{ color: "green", fontSize: "8rem", fontWeight: 900 }}>
        Fei
      </span>
    </div>
  );
};

interface Props {
  users: User[];
}

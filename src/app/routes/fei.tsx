import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-icon-danger">Fei</h1>
    </div>
  );
}

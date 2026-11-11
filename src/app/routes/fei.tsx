import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
    </main>
  );
}

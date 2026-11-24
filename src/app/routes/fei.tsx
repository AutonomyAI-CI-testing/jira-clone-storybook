import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  // The page paints a light surface in every theme, so it pins the light token
  // scope as well: the red stays a true red on white instead of going pale.
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}

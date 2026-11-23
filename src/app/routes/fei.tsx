import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// The page is a fixed white canvas with a single word, so it is pinned to the
// light theme instead of following the user's theme: the surface stays white and
// the word keeps the light theme's red in every theme.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

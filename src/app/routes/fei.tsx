import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page is a fixed white surface, so it pins the light token scope:
    // without it a dark app theme would resolve `font-danger` to its pale
    // dark-theme red and the word would wash out against the white.
    <main className="light flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl leading-none text-font-danger">
        Fei
      </h1>
    </main>
  );
}

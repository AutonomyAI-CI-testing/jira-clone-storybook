import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page is white in every theme, so it pins the light theme's token
    // values: `text-font-danger` stays Red800 instead of turning into the
    // near-white Red300 a dark theme would resolve it to.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

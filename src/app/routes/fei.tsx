import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page stays white in every theme, so it is pinned to the light theme
    // for the red text token to resolve to the light theme's red rather than
    // the paler one dark themes use against their own surfaces.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}

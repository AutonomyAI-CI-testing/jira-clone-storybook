import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no app shell, no controls. The `light` class pins the
// semantic tokens to the light theme so the surface is white and the text is
// ink regardless of the theme stored in the session.
export default function FeiRoute() {
  return (
    <div className="light grid h-full place-items-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font">Fei</h1>
    </div>
  );
}

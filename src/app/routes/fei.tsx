import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // `light` pins the theme on this surface so the background stays white
    // whatever theme the session is on. Text is literal black, not the ink role.
    <div className="light flex h-full w-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}

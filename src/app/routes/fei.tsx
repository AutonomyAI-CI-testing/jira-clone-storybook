import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * Standalone page: a plain white surface with a single word centred on it.
 *
 * The surface is pinned to the light theme (`light`) because it is a fixed
 * look: without it the background and the word would follow the app theme and
 * the page would not stay white. `bg-white` is the surface literal, and
 * `text-font-danger` is the system's red text role — the only red text role
 * the token set declares (the accent trio is icon-only), so the word reads the
 * same red the app already uses for red text.
 */
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

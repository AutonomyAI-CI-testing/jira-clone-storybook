import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // The page is a fixed light composition (white background, red wordmark), so it
    // pins the light theme rather than following the app's theme picker.
    <div className="light flex h-full flex-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}

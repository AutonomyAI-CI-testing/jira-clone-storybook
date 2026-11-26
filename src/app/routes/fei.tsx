import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A standalone page: no app shell, just the word on a white ground.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white font-primary-black">
      {/* text-icon-danger rather than text-font-danger: the ground is fixed
          white, and font-danger resolves to a pale Red300 in the dark, lava and
          lime themes, which would not stay legible or read as red here. */}
      <h1 className="text-5xl text-icon-danger">Fei</h1>
    </main>
  );
}

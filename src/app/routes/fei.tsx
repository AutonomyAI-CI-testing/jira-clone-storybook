import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: pinned white surface with a single black word.
// `bg-white` / `text-black` are declared literals in the Tailwind config, so the
// page looks the same under every theme instead of following the token palette.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}

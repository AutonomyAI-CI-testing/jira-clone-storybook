import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no app shell (no header, no sidebar), nothing but the word.
// Background and text colour are fixed so the page looks the same in every
// theme. `text-font-danger` is deliberately not used: it resolves to a pale
// red (Red300) in the dark theme, which is unreadable on a white background.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-icon-accent-red">Fei</h1>
    </main>
  );
}

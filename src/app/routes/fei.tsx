import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the main layout so nothing else renders
// around it. Colours are fixed rather than themed, so the page looks the same
// in all five themes: literal `white` for the surface, and the raw `--Red800`
// palette variable for the text, because the semantic `--color-font-danger`
// role re-resolves per theme and goes pale against white in the dark ones.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
}

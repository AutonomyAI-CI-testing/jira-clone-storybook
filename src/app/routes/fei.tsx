import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: white background, the word "Fei" centred in large red
// type and nothing else. It sits outside the __main layout so no header,
// navigation or other chrome renders around it.
// White and red are fixed palette values rather than theme tokens: the page
// is deliberately the same in every theme, and the semantic danger tokens
// resolve to a pale red in the dark themes.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

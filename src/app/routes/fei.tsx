import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: a fixed white surface carrying the single word "Fei".
// Colours are deliberately fixed — the `white` literal from tailwind.config.js and
// the `--Red600` palette primitive — never semantic tokens, because every --color-*
// token is re-declared per theme and the page must look the same in all of them.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

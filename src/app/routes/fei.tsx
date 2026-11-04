import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the main layout so nothing else renders
// around it. Colours are literal white/black on purpose, so the page looks
// the same under every theme instead of following the active one.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </div>
  );
}

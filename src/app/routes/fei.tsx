import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: a fixed white surface carrying the single word "Fei".
// Colours are the `white`/`black` literals declared in tailwind.config.js, so the
// page looks identical in every theme instead of following the semantic tokens.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
}

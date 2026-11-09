import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no layout, no navigation, just the wordmark.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">Fei</h1>
    </div>
  );
}

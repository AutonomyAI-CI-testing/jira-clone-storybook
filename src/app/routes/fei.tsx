import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the main layout on purpose, so the header
// and any other app chrome stay off it.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl leading-none text-black">
        Fei
      </h1>
    </main>
  );
}

import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Deliberately bare: a single word on a fixed white page. `bg-white` /
// `text-black` are declared literals, so the page keeps one look whatever
// theme the session holds, and `h-full` fills the viewport off root.tsx's
// html/body height chain.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </main>
  );
}

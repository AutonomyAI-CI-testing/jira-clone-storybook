import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page, rendered outside the main layout: a fixed white surface
// with the word centred, so it does not follow the active theme. The red is the
// raw palette value rather than text-font-danger, which resolves to a pale
// salmon under the dark theme and would not read on this white surface.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

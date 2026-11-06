import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// A deliberately plain page: a fixed white plane with one centred word.
// The colours are static utilities rather than theme tokens, because this
// surface must look the same under every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full bg-white flex-center">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </div>
  );
}

import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Deliberately theme-independent: the page is always white with red text, so both
// colours are fixed. The red is a literal from the palette rather than the theme's
// danger text role, which resolves to a pale red in the dark/lava/lime themes and
// would not read on a white ground.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
}

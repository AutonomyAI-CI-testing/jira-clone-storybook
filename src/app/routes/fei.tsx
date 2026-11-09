import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      {/* The em nudge centres the ink optically: a leading-none line box
          centres the glyph box, which sits high in CircularStdBlack. */}
      {/* text-[color:var(--Red600)] is the raw palette var, not the font-danger role:
          the role flips to a pale salmon under the dark themes, and this page is
          pinned white in every theme. */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

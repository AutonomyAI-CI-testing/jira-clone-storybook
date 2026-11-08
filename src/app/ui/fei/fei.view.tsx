// A deliberately plain, theme-independent page: a single word centred on a
// full-viewport white surface. `bg-white` is the static literal and the word
// takes the raw `--Red600` palette step, not the elevation/font tokens — and
// not the `font-danger` role, which re-resolves per theme — because this
// surface must look the same under every theme. The em-based nudge compensates
// for the line box centring slightly above the glyphs at this size.
export const FeiView = () => (
  <div className="flex h-full items-center justify-center bg-white">
    <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
      Fei
    </h1>
  </div>
);

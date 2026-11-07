// A full-viewport, theme-independent page: the surface is pinned white and the
// word pinned red, so both colours are written as static values rather than the
// theme-dependent elevation/font roles (which resolve dark in the dark-based
// themes). `--Red600` (#e34935) is a raw palette step declared once in `:root`,
// so it stays the same red under every theme.
export const FeiView = () => {
  return (
    <div className="flex h-full items-center justify-center bg-white text-[var(--Red600)]">
      {/* `leading-none` centres the line box, not the glyphs: CircularStdBlack's
          ascent/descent (210/50 per em) leave the ink about 0.06em above the
          middle. The em-based nudge restores optical centring and scales with
          the clamp() size. */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </h1>
    </div>
  );
};

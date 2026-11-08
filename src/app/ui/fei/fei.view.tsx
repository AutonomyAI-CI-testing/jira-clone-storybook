// CircularStdBlack's ink sits above the middle of a leading-none line box, so the
// heading carries a 0.06em downward nudge to land optically centred.
export const FeiView = () => (
  <div className="flex h-full items-center justify-center bg-white">
    <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
      Fei
    </h1>
  </div>
);

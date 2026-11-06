/**
 * Standalone splash page: a single word, centred on a pinned white surface.
 *
 * Registered as a top-level route (outside `routes/__main.tsx`), so it renders
 * with no app chrome and outside the session gate. The white surface and the red
 * ink are the deliberate static case — the page must not follow the active theme,
 * so both take the repo's raw palette rather than a semantic `--color-*` role.
 */
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white text-[color:var(--Red600)]">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </h1>
    </div>
  );
}

// A deliberately minimal standalone page: one word, centred, on a fixed white surface.
// Registered at the top level of `routes.ts` so it renders with no app chrome and no session.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      {/* The translate nudges the glyphs (not the line box) to the optical centre. */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

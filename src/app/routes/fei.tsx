// Standalone page: white background, a single word centred in the viewport.
// Registered as a top-level route (outside the __main layout), so it renders
// with no app chrome and needs no session.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

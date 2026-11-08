// A deliberately minimal standalone page: one word, centred, on a white surface.
// Registered at the top level of `routes.ts`, outside the `__main` layout, so it
// renders with no app chrome and needs no session.
export default function FeiRoute() {
  return (
    <main className="flex h-full w-full bg-white flex-center">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

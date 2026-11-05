// Standalone page: one word, centered, on a fixed white surface.
// Registered at the top level of `routes.ts` so it renders with no app chrome.
// The ink is a raw palette step (`--Red600`), not the `text-font-danger` role:
// the roles are re-declared per theme, so on this fixed-white page that role
// would re-resolve to a pale salmon under the dark-based themes.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

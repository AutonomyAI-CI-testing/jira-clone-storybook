// Standalone page, deliberately outside MainLayout and the theme tokens:
// the background stays white and the text red in every theme, so the palette
// value is pinned instead of the theme-dependent --color-font-danger.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}

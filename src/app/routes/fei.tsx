// Standalone page, deliberately outside the `__main` layout so it renders no
// header/nav and needs no session. The colours are literal on purpose: this is
// a fixed white sheet, and the theme roles repaint per theme (elevation-surface
// goes dark, font-danger goes pale in the dark themes) which would break it.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white text-[var(--Red600)]">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </main>
  );
}

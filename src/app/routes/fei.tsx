// Standalone page, deliberately outside MainLayout and the theme tokens:
// the background stays white and the text black in every theme.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}

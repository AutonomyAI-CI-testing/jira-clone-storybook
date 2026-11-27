// Standalone page: a white canvas with a single centered word.
// It intentionally sits outside the `__main` layout so nothing else renders
// around it. The canvas is literal white (not a theme token) so it stays white
// in every theme; the word takes its color from the app's semantic red.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <p className="font-primary-black text-9xl text-font-danger">Fei</p>
    </div>
  );
}

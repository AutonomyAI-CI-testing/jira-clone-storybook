// Standalone page: a white canvas with a single centered word.
// It intentionally sits outside the `__main` layout so nothing else renders
// around it, and it uses literal white/black (not the semantic theme tokens)
// so it looks identical in every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <p className="font-primary-black text-9xl text-black">Fei</p>
    </div>
  );
}

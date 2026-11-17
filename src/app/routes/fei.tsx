// Standalone page: a plain white sheet with a single large word in the centre.
// It intentionally sits outside the `__main` layout so nothing else renders on it.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[var(--Red700)]">Fei</h1>
    </div>
  );
}

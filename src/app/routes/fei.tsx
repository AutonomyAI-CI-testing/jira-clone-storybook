// Standalone page: a white canvas with a single word centred in it.
// Kept out of the __main layout so nothing else renders around it.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </main>
  );
}

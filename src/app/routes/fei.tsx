// Minimal standalone page: a single centered word on a white background.
// Intentionally kept out of the main layout so nothing else renders with it.
// Pinned to the light theme so the fixed white ground always pairs with the
// light resolution of the semantic red, in every theme.
export default function FeiRoute() {
  return (
    <main className="light flex h-screen w-full items-center justify-center bg-white">
      <h1 className="text-center font-primary-black text-5xl text-font-danger">
        Fei
      </h1>
    </main>
  );
}

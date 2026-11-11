// Standalone page: a white canvas with a single word centred in it.
// Kept out of the __main layout so nothing else renders around it. The page
// pins the light palette so the word keeps a readable red on its white
// background whichever theme the rest of the app is using.
export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}

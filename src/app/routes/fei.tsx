// Standalone splash page: a white page with the word "Fei" centred.
// It is deliberately theme-independent (plain white/black rather than the
// semantic surface/text tokens) so it stays white with black text in every
// theme the app offers.
export default function FeiRoute() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}

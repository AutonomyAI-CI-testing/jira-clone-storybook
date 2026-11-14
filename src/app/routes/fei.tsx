// Standalone page: the word "Fei" centred on a white background.
// Registered outside the __main layout so no header or navigation renders.
// Theme-independent by design (fixed white page), so it uses the fixed palette
// variable rather than text-font-danger, which goes pale under the dark themes.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">Fei</h1>
    </div>
  );
}

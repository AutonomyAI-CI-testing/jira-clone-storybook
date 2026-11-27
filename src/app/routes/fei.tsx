// Standalone page: a plain white canvas with the word "Fei" centered.
// Outside the main layout, and deliberately literal colours so it looks the
// same in every theme — the palette's white and Danger Red (--Red600), rather
// than the themed surface and ink tokens.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}

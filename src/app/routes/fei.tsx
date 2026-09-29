/**
 * Standalone page: white background with "Fei" centered in large red text.
 * Intentionally minimal — no header, sidebar, theme tokens or extra copy.
 */
export default function FeiRoute() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">Fei</h1>
    </div>
  );
}

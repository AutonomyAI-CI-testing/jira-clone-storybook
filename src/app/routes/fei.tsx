// Standalone page: intentionally outside the main layout so nothing but the
// word is on screen. White background and black ink are pinned values, so the
// page looks the same under every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}

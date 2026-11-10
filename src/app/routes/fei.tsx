// Standalone page: intentionally outside the main layout so nothing but the
// word is on screen. The surface and the red are pinned values, so the page
// looks the same under every theme. The red is a raw palette value because no
// semantic role is theme-stable on a pinned white surface.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

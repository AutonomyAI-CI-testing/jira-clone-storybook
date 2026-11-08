// Standalone page: a pinned white surface with a single centred word.
// Registered as a top-level route in routes.ts so it renders with no app chrome.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </div>
  );
}

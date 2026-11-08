// A standalone page: "Fei" centred on a plain white surface.
// Pinned with the static `bg-white` surface and the raw-palette `--Red600` red,
// so it looks the same in every one of the app's five themes.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

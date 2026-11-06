// A standalone full-viewport page: white background, "Fei" centred in red.
// The colours are deliberately fixed so the page looks the same under all five
// themes: `bg-white` is a declared literal, and the red is the theme-stable
// `--Red600` palette variable (the `text-font-danger` role flips per theme).
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

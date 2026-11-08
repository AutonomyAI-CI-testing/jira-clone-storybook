// Standalone page: the word "Fei" centred on a white background.
// Registered as a top-level route so it renders with no app chrome (no header)
// and no session gate, and pinned to static white plus the raw palette red, both
// of which hold their value in every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

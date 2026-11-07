// Standalone full-viewport page: a single word on a plain white ground.
// Registered as a top-level route so it renders with no header and no session gate.
// Colours are pinned to the raw palette (not the theme roles) so the page looks the
// same under every theme the app offers.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}

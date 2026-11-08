// A deliberately bare statement page: one word, centred on a white surface.
// It is registered as a top-level route in `routes.ts`, so it renders with no
// app chrome and no session gate. The surface is pinned with the static
// `bg-white` / `text-black` utilities rather than the theme tokens, so it looks
// identical in every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </div>
  );
}

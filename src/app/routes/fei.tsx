// Standalone page: a white plane with the word "Fei" centred on it.
// Registered at the top level of routes.ts, so it renders with no app
// chrome and needs no session. `bg-white` / `text-black` are the declared
// literals (not semantic tokens), so the page looks the same under all
// five themes.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </main>
  );
}

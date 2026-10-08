// Deliberately theme-independent: this page is asked to be white with red text
// in every theme, so it uses the literal `white` scale entry instead of the
// semantic surface token, and pins the red to the Red ramp rather than using
// `text-font-danger` — that token resolves to a pale red (Red300) under the
// dark/lava/lime themes, which is barely legible on a white background.
export const FeiView = () => (
  <div className="flex min-h-screen w-full flex-center bg-white">
    <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
  </div>
);

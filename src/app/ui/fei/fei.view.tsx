// Deliberately theme-independent: this page is asked to be white with black
// text in every theme, so it uses the literal `white`/`black` scale entries
// instead of the semantic surface/font tokens.
export const FeiView = () => (
  <div className="flex min-h-screen w-full flex-center bg-white">
    <h1 className="font-primary-black text-8xl text-black">Fei</h1>
  </div>
);

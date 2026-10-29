// This screen is a single, self-contained panel: a black page with the word
// "Fei" centred on it, and nothing else. The two colours are literal on
// purpose — the theme palette has no black, and the page has to look the same
// in every theme.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]">
      <h1 className="font-primary-black text-9xl text-[var(--Green600)]">Fei</h1>
    </div>
  );
};

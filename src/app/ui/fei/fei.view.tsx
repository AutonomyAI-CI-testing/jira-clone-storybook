export const FeiView = () => {
  return (
    // This page is deliberately theme-independent: the background stays white and
    // the word keeps the same colour in every theme, so it uses fixed colours
    // instead of the theme-dependent elevation-surface / font-* tokens.
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};

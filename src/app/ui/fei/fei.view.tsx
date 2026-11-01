// This page is deliberately theme-independent: a fixed white sheet with a fixed
// red wordmark. The palette red is used directly instead of the semantic font
// tokens, which lighten to a washed red under the dark themes and would lose
// their contrast against the white background.
export const FeiView = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">
        Fei
      </h1>
    </main>
  );
};

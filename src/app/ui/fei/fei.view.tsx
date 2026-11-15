export const FeiView = (): JSX.Element => {
  // This page is deliberately theme-independent (always white), so the text
  // colour is a fixed literal: the danger role resolves to a pale red in the
  // dark themes, which would not read on a white surface.
  return (
    <main className="flex h-full min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </main>
  );
};

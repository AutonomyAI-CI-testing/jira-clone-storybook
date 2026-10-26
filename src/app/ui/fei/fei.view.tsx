export const FeiView = () => {
  // This page is deliberately theme-independent: it stays white in every app
  // theme, so its text colors are fixed literals instead of the semantic
  // tokens, which are tuned against the themed surfaces and would wash out on
  // a permanently white page. The red is the palette's Red600.
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
};

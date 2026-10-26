// This page is intentionally theme-independent: a fixed white canvas, so its
// colours are pinned rather than taken from the theme tokens. #ca3521 is the
// red this design system declares as "danger".
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#ca3521]">Fei</h1>
    </div>
  );
};

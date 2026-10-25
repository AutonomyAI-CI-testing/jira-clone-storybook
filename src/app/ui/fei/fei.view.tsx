// This page keeps a literal white background in every theme, so its text colour
// is a literal too: the theme-aware `text-font-danger` resolves to a pale red in
// dark mode and would be unreadable on the white surface.
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-[#e34935]">Fei</h1>
    </div>
  );
};

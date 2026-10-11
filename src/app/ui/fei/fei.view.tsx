export const FeiView = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* Kept on the raw Red700 token on purpose: this page stays white in
          every theme, so the theme-aware --color-font-danger (Red300 in the
          dark themes) would wash out against it. */}
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">Fei</h1>
    </div>
  );
};

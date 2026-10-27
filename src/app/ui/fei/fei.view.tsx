export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* A fixed red rather than the themed text-font-danger: this page stays
          white in every theme, and the themed red washes out in the dark ones. */}
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
};

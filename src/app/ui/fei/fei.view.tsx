export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      {/* Palette red rather than text-font-danger: this page keeps a fixed white
          background, and the semantic danger token lightens to Red300 on the
          dark/lava/lime themes, which washes out against it. */}
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};

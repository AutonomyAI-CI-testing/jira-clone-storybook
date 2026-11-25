export const FeiView = () => {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* The red is pinned to the ramp value instead of the semantic
          `text-font-danger` token: this page keeps a white background in every
          theme, and that token resolves to a pale red (--Red300) on the dark
          themes, which would not be legible here. */}
      <h1 className="font-primary-black text-7xl text-[color:var(--Red700)]">
        Fei
      </h1>
    </div>
  );
};

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      {/* Fixed surface: a black ground and one green word, identical under
          every theme, so the palette green is named directly instead of a
          theme role. */}
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};

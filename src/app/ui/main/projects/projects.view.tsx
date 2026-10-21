export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/*
        The page is a fixed black surface, so it takes the palette's saturated
        green (--color-icon-accent-green). The success *text* token is a deep,
        muddy shade against black, and a light one only in the dark theme.
      */}
      <h1 className="font-primary-black text-8xl leading-none text-icon-accent-green">
        Fei
      </h1>
    </div>
  );
};

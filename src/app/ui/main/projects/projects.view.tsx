export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/*
        The page is a fixed black surface, so it takes the palette's saturated
        red (--color-icon-danger). The danger *text* token is a deep, muddy
        shade against black, and a light one only in the dark theme.
      */}
      <h1 className="font-primary-black text-8xl leading-none text-icon-danger">
        Fei
      </h1>
    </div>
  );
};

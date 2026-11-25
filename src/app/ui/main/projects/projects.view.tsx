export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      {/* The page has a fixed black surface, so the theme's text-danger token
          would lose contrast in the light themes. accent-red keeps the same
          red on black in every theme. */}
      <h1 className="font-primary-black text-[18vw] leading-none text-icon-accent-red">
        Fei
      </h1>
    </div>
  );
};

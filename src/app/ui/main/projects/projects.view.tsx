import { Outlet } from "react-router";

// Deliberately bare, full-bleed screen: a black page with a single centred
// word. The black background and the display word's colour are a direct
// request, so they use literal values (black is declared in the Tailwind
// theme, the colour comes from the palette) instead of semantic tokens.
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};

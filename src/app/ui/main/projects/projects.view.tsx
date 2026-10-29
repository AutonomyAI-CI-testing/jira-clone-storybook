export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      {/* One-off screen: a black canvas with a single word and no chrome. The
          word is set above the system's Display step because it is the only
          thing on the page. The theme has no token for type on a pure-black
          surface — its danger red is scoped to the theme's own surfaces — so
          the red is written at the value the palette defines it with
          (--Red600). */}
      <h1 className="font-primary-black text-9xl text-[#e34935]">Fei</h1>
    </div>
  );
};

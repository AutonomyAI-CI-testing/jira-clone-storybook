// The projects page is a full-bleed screen. The theme declares no pure-black
// token, so the surface uses a literal black and the Green600 primitive for the
// text, which stays green in every theme.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000]">
      <h1 className="font-primary-black text-5xl text-[var(--Green600)]">Fei</h1>
    </div>
  );
};

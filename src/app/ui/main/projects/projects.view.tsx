// Fixed look: the surface is always black and the wordmark always the same red,
// so the colour comes from the raw palette instead of a semantic role that
// re-resolves per theme. z-20 covers the header strip (z-10) while staying
// under the portalled dialogs (z-50).
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
};

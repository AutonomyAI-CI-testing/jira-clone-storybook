export const ProjectsView = (): JSX.Element => {
  return (
    // Full-viewport takeover: this route shows only the word "Fei" on black,
    // so the panel sits above the app header (z-10) and fills the viewport.
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-icon-accent-green">Fei</h1>
    </div>
  );
};

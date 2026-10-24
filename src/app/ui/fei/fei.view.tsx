// Theme-independent by design (the page stays white in every theme), so the
// theme-aware --color-font-danger can't be used here: against a white page it
// resolves to a pale #ff9c8f in the dark/lava/lime themes. This literal is the
// design system's accent red (Red600), held fixed.
export const FeiView = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <h1 className="font-primary-black text-8xl text-[#e34935]">Fei</h1>
  </div>
);

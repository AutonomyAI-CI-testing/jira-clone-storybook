// This page is deliberately theme-independent: it is always a white surface,
// so the subtree is pinned to the light theme. Without it, the red would
// resolve to the pale dark-theme tone and wash out against the white.
export const FeiView = () => (
  <div className="light flex h-full w-full items-center justify-center bg-white">
    <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
  </div>
);

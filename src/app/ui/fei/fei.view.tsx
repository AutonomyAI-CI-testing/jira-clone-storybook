// This page is deliberately theme independent: it keeps a white background and a
// fixed text colour whatever theme is active, so the subtree is pinned to the
// light palette. Otherwise `text-font-danger` would resolve to the pale red that
// the dark themes use on dark surfaces and wash out on white.
export const FeiView = () => (
  <div className="light flex min-h-screen items-center justify-center bg-white">
    <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
  </div>
);

export default function FeiRoute() {
  return (
    // The surface is pinned to white, so the page is pinned to the light theme
    // with it: otherwise the red resolves to a pale step under the dark themes
    // and washes out against the white background.
    <div className="light flex h-full items-center justify-center bg-white">
      <p className="font-primary-black text-5xl text-font-danger">Fei</p>
    </div>
  );
}

export default function FeiRoute() {
  return (
    // Pinned to the light theme: this page keeps a fixed white background, so
    // its text color must not re-resolve when the app's theme changes.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

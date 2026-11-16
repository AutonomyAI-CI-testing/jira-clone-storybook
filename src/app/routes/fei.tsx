// Minimal page: the app's name, centered on the app's light surface.
// Pinned to the light theme so it stays white-on-black in every theme.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font">Fei</h1>
    </div>
  );
}

// A standalone page, deliberately outside the MainLayout: a white canvas with a
// single word on it. The `light` class pins the surface so it stays white under
// every theme (see the design system's "Pin-Only-When-Fixed" rule).
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font">Fei</h1>
    </div>
  );
}

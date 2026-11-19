// Standalone page: a white canvas with the name centred in it.
// Deliberately outside the main layout, so no header or sidebar renders.
// The light scope keeps the canvas white whatever theme the user has selected.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

// Deliberately minimal page: nothing but the word, centred on a white canvas.
// The `light` class pins this surface to the light tokens, so the white
// background holds whichever theme the user has selected.
export default function FeiRoute() {
  return (
    <div className="light flex min-h-screen items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

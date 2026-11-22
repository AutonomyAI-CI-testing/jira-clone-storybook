// Standalone page: a plain white canvas with a single centered word.
// Colors are fixed (not theme tokens) so it renders white with a red word
// in every theme. --Red600 is the closest step in the palette to plain red.
export default function FeiRoute() {
  return (
    <div className="flex-center flex h-full bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}

// Standalone /fei page: a fixed white canvas with a large red "Fei" centered.
// Colors are deliberately literal rather than theme tokens — the page has to
// stay white with red text in every theme, and the dark themes' red (#e34935
// re-mapped to Red300) would read as pale salmon on a white background.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[#e34935]">Fei</h1>
    </div>
  );
}

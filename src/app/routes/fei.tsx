// Standalone page: a white screen with a single centred word.
// The page is pinned white on purpose, so its colour comes from the raw palette
// rather than a theme role: a semantic role would re-resolve under the dark
// themes and lose its contrast against the white ground.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white text-[var(--Red700)]">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </div>
  );
}

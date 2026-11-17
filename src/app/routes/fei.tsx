export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* Fixed palette red, not text-font-danger: this page pins its own white
          surface, so a theme-aware token would wash out under a dark theme. */}
      <h1 className="font-primary-black text-9xl text-[var(--Red700)]">Fei</h1>
    </div>
  );
}

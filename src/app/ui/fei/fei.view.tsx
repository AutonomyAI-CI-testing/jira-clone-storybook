// Surface and text colors are intentionally pinned instead of using the
// semantic theme tokens, so this page looks the same in every theme.
// The red is the design system's Alert Red (--Red600).
export const FeiView = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[#e34935]">Fei</h1>
    </div>
  );
};

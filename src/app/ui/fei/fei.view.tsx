export const FeiView = () => {
  // Intentionally hardcoded white background and red text: the page is
  // meant to look identical in every theme, so semantic theme tokens
  // would be wrong here. The red is the raw scale value (Red600) since
  // the Tailwind palette only exposes semantic color names.
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <span className="font-primary-black text-8xl text-[#e34935]">Fei</span>
    </div>
  );
};

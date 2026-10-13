// Deliberately outside the theme system: this page is a plain white canvas
// with the word centred on it, so both its surface and its type are fixed
// literals rather than theme tokens. A token would flip the word to a pale
// pink-red against the white canvas in the dark theme.
export const FeiView = () => {
  return (
    <div className="grid min-h-screen w-full place-items-center bg-white">
      {/* The design system's danger red (Red600). */}
      <h1 className="font-primary-black text-8xl text-[#e34935]">Fei</h1>
    </div>
  );
};

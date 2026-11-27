// This page keeps its white background in every theme, so the wordmark uses the
// palette red directly: the semantic `text-font-danger` turns pale in the dark
// themes and would stop being readable on white.
export const FeiView = () => {
  return (
    <div className="flex h-full bg-white flex-center">
      <h1 className="font-primary-black text-5xl text-[#ca3521]">Fei</h1>
    </div>
  );
};

export const FeiView = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      {/* The page keeps a fixed white surface, so the word takes the accent red
          token that stays legible on white in every theme rather than the
          theme-adaptive danger text. */}
      <h1 className="font-primary-black text-5xl text-icon-accent-red">Fei</h1>
    </div>
  );
};

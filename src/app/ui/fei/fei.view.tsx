// Deliberately theme-independent: this page is a plain white surface with red
// text, so it names the literal white/black theme colors and the raw red ramp
// step instead of the theme-swapped semantic tokens.
export const FeiView = () => {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red700)]">
        Fei
      </h1>
    </div>
  );
};

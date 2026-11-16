// Deliberately not themed: the page is a plain white sheet, so it reads the
// same in every theme. The red is pinned to the raw ramp (--Red800, the value
// --color-font-danger resolves to in the light theme) because the semantic
// token goes pale in the dark themes and would all but vanish on white.
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
};

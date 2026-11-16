// A plain, standalone page: it sits outside the app shell (`routes/__main.tsx`),
// so there is no header or sidebar, and it is theme-independent by design.
// The colours are fixed rather than semantic: the page must stay white with red
// type in every theme, while `bg-elevation-surface` and `--color-font-danger` flip
// with the active theme (in dark, lava, lime and barbie `--color-font-danger`
// resolves to a pale `--Red300`, which would not read on white).
// `--Red800` is the value `--color-font-danger` takes in the default theme.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[color:var(--Red800)]">
        Fei
      </h1>
    </div>
  );
}

// A plain, standalone page: it sits outside the app shell (`routes/__main.tsx`),
// so there is no header or sidebar, and it is theme-independent by design.
// Colours are fixed rather than semantic: the page is always white, while
// `bg-elevation-surface` and `text-font-danger` flip with the active theme
// (dark, lava, lime, barbie) - and under the dark themes `--color-font-danger`
// resolves to a pale `--Red300` (#ff9c8f), which is unreadable on white.
// `--Red800` is the value `--color-font-danger` takes in the default theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[color:var(--Red800)]">
        Fei
      </h1>
    </div>
  );
}

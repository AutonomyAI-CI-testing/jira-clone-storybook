// Standalone page: a plain white surface with a single centred word.
// It sits outside the __main layout on purpose, so no header, sidebar or
// breadcrumbs are rendered around it.
//
// The colours are pinned on purpose: `bg-white` and the raw `--Red600` palette
// step rather than the themeable `--color-*` roles, so the page reads the same
// under all five themes. The semantic red role (`--color-icon-accent-red`)
// resolves to `--Red500` outside the light theme, which would shift the hue.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-9xl text-[var(--Red600)]">
        Fei
      </span>
    </div>
  );
}

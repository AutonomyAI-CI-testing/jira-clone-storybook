/**
 * Standalone page: a white surface with a single centred word.
 *
 * The `light` class pins the theme for this subtree so the page keeps its white
 * surface whatever theme the visitor has selected, and `text-font-danger` is
 * declared on the heading itself because a pinned container does not re-resolve
 * an inherited colour.
 */
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}

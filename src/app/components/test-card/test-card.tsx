
/**
 * TestCard provides a simple visual container for demonstration purposes.
 * It uses the elevation-surface-raised background and standard spacing.
 */
export function TestCard() {
  return (
    <div id="testElem" className="bg-elevation-surface-raised border border-border shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-semibold">Test Card</h2>
      <p className="text-font text-font-subtle">This is a sample card component.</p>
    </div>
  );
}

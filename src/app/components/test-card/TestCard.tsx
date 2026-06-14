/**
 * TestCard component follows the "UI Magician Agent" design specification.
 * It's a self-contained visual prototype used for testing and Storybook.
 * Colors and icons are hardcoded to match the specific dark/amber Figma design.
 */
export function TestCard(): JSX.Element {
  // Shared styles for form inputs and buttons to ensure consistency and easier maintenance
  const inputStyles =
    "border-zinc-600 text-zinc-400 placeholder:text-zinc-600 focus:border-amber-500 w-full rounded border bg-transparent px-3 py-2 focus:outline-none";
  const buttonStyles =
    "hover:bg-amber-600 rounded-lg bg-[#b5541e] px-6 py-3 font-medium text-white transition-colors duration-200";

  return (
    <div id="testElem" className="rounded-lg bg-[#2a2a2a] p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
        <span className="text-xl text-white opacity-70">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="mt-4 flex items-center gap-2 text-sm text-[#c87941]">
        <span className="text-lg">^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-lg text-white">^</span>
          <h3 className="text-md font-bold text-white">Add New Design</h3>
        </div>

        {/* Personal Access Token field */}
        <div className="mt-4">
          <label
            htmlFor="pat-input"
            className="text-zinc-300 mb-1 block text-sm font-medium"
          >
            Personal Access Token{" "}
            <span className="text-zinc-500 text-xs">ⓘ</span>
          </label>
          <input
            type="text"
            id="pat-input"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={inputStyles}
          />
        </div>

        {/* Design URL field */}
        <div className="mt-4">
          <label
            htmlFor="design-url-input"
            className="text-zinc-300 mb-1 block text-sm font-medium"
          >
            Design URL <span className="text-zinc-500 text-xs">ⓘ</span>
          </label>
          <input
            type="text"
            id="design-url-input"
            placeholder="https://www.figma.com/file/:"
            className={inputStyles}
          />
        </div>

        {/* Buttons - Primary action buttons with specific amber/orange branding */}
        <div className="mt-6 flex gap-4">
          <button className={buttonStyles}>Awesome</button>
          <button className={buttonStyles}>Prepare</button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-zinc-700 mt-8 border-t pt-4">
        <h3 className="text-md font-bold text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
}

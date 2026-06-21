/**
 * TestCard component
 * A self-contained component replicating the UI magician Agent design.
 * Primarily used as a smoke test for Tailwind and dark-theme rendering.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex max-w-[360px] flex-col gap-4 rounded-lg bg-[#2a2a2a] p-5 text-white"
    >
      {/* Header Row: Title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <span className="text-gray-300 text-xl" aria-hidden="true">
          ⚙
        </span>
      </div>

      {/* Subtitle Row: Status or context message */}
      <div className="flex items-center gap-1">
        <span className="text-sm" aria-hidden="true">
          ∧
        </span>
        <p className="text-sm text-[#c97c4a]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section Header */}
      <div className="mt-2 flex items-center gap-1">
        <span className="text-lg" aria-hidden="true">
          ∧
        </span>
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Input Fields Container */}
      <div className="mt-2 flex flex-col gap-4">
        <FormField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Primary Actions: Side-by-side buttons for main workflow */}
      <div className="mt-3 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b05e2f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c97c4a]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b05e2f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c97c4a]">
          Prepare
        </button>
      </div>

      {/* Recent Activity Section Header */}
      <h2 className="mt-2 text-lg font-semibold">Recent Breakdowns</h2>
    </div>
  );
}

/**
 * Internal helper for consistent form field rendering in the TestCard
 */
function FormField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <label htmlFor={id} className="text-sm text-white">
          {label}
        </label>
        <span
          className="text-gray-400 text-xs"
          title="Information"
          aria-hidden="true"
        >
          ⓘ
        </span>
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="text-gray-300 placeholder-gray-500 w-full rounded border border-[#444] bg-[#1e1e1e] px-3 py-2 text-sm transition-colors focus:border-[#b05e2f] focus:outline-none"
      />
    </div>
  );
}

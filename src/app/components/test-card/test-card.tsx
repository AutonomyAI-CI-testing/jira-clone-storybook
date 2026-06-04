// Helper component for rendering inline SVG icons with consistent styling
const IconSVG = ({
  className,
  d,
}: {
  className: string;
  d: string | string[];
}): JSX.Element => {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {paths.map((path, idx) => (
        <path
          key={idx}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={path}
        />
      ))}
    </svg>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="text-gray-400 w-[254px] bg-black p-3 text-xs font-semibold"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-300 text-sm">UI magician Agent</span>
        <IconSVG
          className="h-4 w-4 flex-shrink-0"
          d={[
            "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
            "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          ]}
        />
      </div>

      {/* Collapsible Section */}
      <div className="border-gray-700 mb-4 border-b pb-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">From entire frame to a singl...</span>
          <IconSVG
            className="text-gray-400 h-4 w-4 flex-shrink-0"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="border-gray-700 mb-4 flex items-center justify-between border-b pb-3">
        <span className="text-gray-300">Add New Design</span>
        <IconSVG
          className="text-gray-400 h-4 w-4 flex-shrink-0"
          d="M9 5l7 7-7 7"
        />
      </div>

      {/* Input Fields */}
      <div className="mb-4 space-y-3">
        {/* Personal Access Token */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-gray-400 text-xs">
              Personal Access Token
            </label>
            <IconSVG
              className="text-gray-500 h-3 w-3 flex-shrink-0"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </div>
          <input
            type="text"
            placeholder="Enter your token"
            className="border-gray-600 text-gray-300 placeholder-gray-600 focus:border-gray-500 w-full border bg-black px-2 py-1 text-xs focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-gray-400 text-xs">Design URL</label>
            <IconSVG
              className="text-gray-500 h-3 w-3 flex-shrink-0"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </div>
          <input
            type="text"
            placeholder="Paste design URL"
            className="border-gray-600 text-gray-300 placeholder-gray-600 focus:border-gray-500 w-full border bg-black px-2 py-1 text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <button className="border-gray-600 text-gray-500 hover:bg-gray-900 flex-1 border bg-black px-3 py-1.5 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-gray-700 text-gray-600 hover:bg-gray-600 flex-1 px-3 py-1.5 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-xs">Recent Breakdowns</div>
    </div>
  );
};

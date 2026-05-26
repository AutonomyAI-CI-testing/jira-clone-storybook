// SVG icon components - extracted for reusability and to keep the main component JSX clean
const SettingsIcon = () => (
  <svg
    className="h-6 w-6 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" strokeWidth="1.5" fill="none" />
    <path
      d="M12 5v2M12 17v2M5 12H3M21 12h-2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ChevronUpIcon accepts a color prop via Tailwind class to support multiple color variants
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    className={`h-5 w-5 ${color}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline points="18 15 12 9 6 15" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// InfoIcon accepts a color prop via Tailwind class to support multiple color variants
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    className={`h-5 w-5 ${color}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M12 16v-4M12 8h.01" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-md bg-[#2b2b2b] p-5 font-family-inter text-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="whitespace-nowrap text-2xl font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* First Collapsible Section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon color="text-[#a3a3a2]" />
        <span className="text-sm font-semibold text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon color="text-[#b2b2b1]" />
        <h2 className="text-2xl font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#a4a4a3]">Personal Access Token</label>
          <InfoIcon color="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#737470] bg-[#1a1a1a] px-3 py-4 text-sm font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#a3a3a2]">Design URL</label>
          <InfoIcon color="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#737470] bg-[#1a1a1a] px-3 py-4 text-sm font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
        />
      </div>

      {/* Action Buttons - secondary CTA styling with warm brown tones matching the design system */}
      <div className="mb-16 flex gap-4">
        <button className="flex-1 rounded bg-[#a0744d] px-4 py-4 text-sm font-semibold text-[#8c8078] hover:bg-[#b0845d] active:bg-[#90643d]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#a0744d] px-4 py-4 text-sm font-semibold text-[#8c8078] hover:bg-[#b0845d] active:bg-[#90643d]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="text-2xl font-semibold text-[#b0b0b0]">Recent Breakdowns</div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-sm text-[#a3a3a2]">
        © AutonomyAI
      </div>
    </div>
  );
};

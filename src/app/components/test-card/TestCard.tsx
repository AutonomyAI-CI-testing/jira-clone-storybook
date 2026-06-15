/**
 * Repetitive icons extracted for clarity and reuse. Values match the Figma design spec.
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/**
 * Unified field component to reduce repetition in form layout.
 * Styling uses arbitrary values as regular utility classes are restricted in this project.
 */
const Field = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="mt-4">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className="text-white text-sm">{label}</label>
      <InfoIcon className="text-white" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full mt-1 bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-[#aaa] text-sm focus:outline-none focus:ring-1 focus:ring-[#b85c2a]"
    />
  </div>
);

/**
 * TestCard: A smoke-test component visually replicating the Figma design.
 * Uses #2a2a2a background and #b85c2a orange accents as per the spec.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 max-w-sm w-full text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <SettingsIcon className="text-white w-6 h-6" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mt-2">
        <ChevronUpIcon className="text-[#d97706]" />
        <span className="text-[#d97706] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mt-8 flex items-center gap-2">
        <ChevronUpIcon className="text-white" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      <Field id="pat" label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <Field id="design-url" label="Design URL" placeholder="https://www.figma.com/file/:" />

      {/* Buttons Row - Matching Figma's side-by-side layout */}
      <div className="flex gap-4 mt-6">
        <button type="button" className="bg-[#b85c2a] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all">
          Awesome
        </button>
        <button type="button" className="bg-[#b85c2a] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all">
          Prepare
        </button>
      </div>

      {/* Footer Title */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

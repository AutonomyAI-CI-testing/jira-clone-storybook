/**
 * TestCard — a self-contained smoke test component.
 *
 * Reproduces the attached "UI magician Agent" design as a single static panel.
 * No props, no state and no behaviour: the fields and buttons are inert.
 *
 * Values (colours, sizes, spacing) are approximations read off the design image,
 * so this component deliberately does not use the repo's semantic theme tokens.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-[40px] pb-[80px] pt-[40px] text-[#e6e6e6]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-[22px] font-bold text-[#e6e6e6]">UI magician Agent</h2>
      <GearIcon className="h-6 w-6 text-[#e6e6e6]" />
    </div>

    {/* Collapsed disclosure */}
    <div className="mt-[30px] flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#8a8a8a]" />
      <span className="min-w-0 truncate text-[18px] text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Empty gap */}
    <div className="h-[130px]" />

    {/* Section heading */}
    <div className="flex items-center gap-2">
      <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#f5f5f5]" />
      <h3 className="text-[24px] font-bold text-[#f5f5f5]">Add New Design</h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[55px] flex items-center gap-2">
      <label htmlFor="test-pat" className="text-[18px] text-[#c9c9c9]">
        Personal Access Token
      </label>
      <InfoIcon className="h-[18px] w-[18px] text-[#c9c9c9]" />
    </div>
    <input
      id="test-pat"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-[10px] h-[68px] w-full rounded-[2px] border border-[#6e6e6e] bg-transparent px-[20px] text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a] focus:outline-none"
    />

    {/* Design URL */}
    <div className="mt-[20px] flex items-center gap-2">
      <label htmlFor="test-url" className="text-[18px] text-[#c9c9c9]">
        Design URL
      </label>
      <InfoIcon className="h-[18px] w-[18px] text-[#c9c9c9]" />
    </div>
    <input
      id="test-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[10px] h-[68px] w-full rounded-[2px] border border-[#6e6e6e] bg-transparent px-[20px] text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a] focus:outline-none"
    />

    {/* Actions */}
    <div className="mt-[50px] flex gap-[38px]">
      <button
        type="button"
        className="h-[75px] w-[170px] rounded-[8px] bg-[#8f3f1c] text-[20px] font-bold text-[#9c9080]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[75px] w-[170px] rounded-[8px] bg-[#8f3f1c] text-[20px] font-bold text-[#9c9080]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[60px] text-[24px] font-bold text-[#f5f5f5]">
      Recent Breakdowns
    </h3>
  </div>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default TestCard;

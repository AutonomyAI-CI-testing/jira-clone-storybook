export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1a1d19] px-6 py-8 text-[#c8cbc4] font-sans"
    >
      {/* Header */}
      <div className="mb-10 flex items-start justify-between">
        <h1 className="text-[22px] font-normal leading-tight tracking-wide text-[#c5c8c1]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="mt-1 text-[#9a9e96]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed row */}
      <div className="mb-12 flex items-center gap-2 text-[15px] text-[#9a9e96]">
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2 text-[16px] text-[#b0b4ac]">
        <ChevronUp />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-5">
        <label className="mb-2 flex items-center gap-2 text-[14px] text-[#b0b4ac]">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxx"
          className="w-full rounded-sm border border-[#6b6f68] bg-[#2a2d28] px-3 py-2.5 text-[14px] text-[#8a8e86] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-[14px] text-[#b0b4ac]">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded-sm border-2 border-[#8a8e86] bg-[#2a2d28] px-3 py-2.5 text-[14px] text-[#c5c8c1] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-14 flex gap-3">
        <button
          type="button"
          className="rounded-md bg-[#a85a32] px-8 py-2.5 text-[15px] text-[#d4b5a0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a85a32] px-8 py-2.5 text-[15px] text-[#d4b5a0]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-[16px] text-[#b0b4ac]">Recent Breakdowns</div>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5L6 1.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#8a8e86]"
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="M8 7v4"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

export default TestCard;

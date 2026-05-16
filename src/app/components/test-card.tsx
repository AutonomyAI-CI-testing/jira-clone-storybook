// Info icon SVG used for both Personal Access Token and Design URL labels
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#a4a4a3]"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 5V8M7.5 10.5H7.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] rounded bg-[#1a1a17] p-5 text-sm font-semibold">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            d="M7 0L8.5 1.5L7 3L5.5 1.5L7 0Z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="7" cy="8" r="3" stroke="currentColor" fill="none" />
          <path
            d="M2 2L3.5 3.5M11.5 3.5L10 2M2 14L3.5 12.5M10 14L11.5 12.5"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Collapsed accordion section - large bottom margin creates visual separation from form below */}
      <div className="mb-28 flex items-center gap-2">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b9291]"
        >
          <path
            d="M1 7L6 2L11 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-12 flex items-center gap-2">
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path
            d="M1 4L4 1L7 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token field for Figma integration */}
      <div className="mb-2 flex items-center gap-1.5">
        <span className="text-xs text-[#a4a4a3]">Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-6 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-3 text-xs text-[#737470] placeholder-[#737470] focus:outline-none"
      />

      {/* Design URL field for Figma file input */}
      <div className="mb-2 flex items-center gap-1.5">
        <span className="text-xs text-[#a3a3a2]">Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-12 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-3 text-xs text-[#71726e] placeholder-[#71726e] focus:outline-none"
      />

      {/* Action buttons - large bottom margin creates breathing room before footer */}
      <div className="mb-24 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-[#b0b0b0]">Recent Breakdowns</div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-xs text-[#b0b0b0]">
        © AutonomyAI
      </div>
    </div>
  );
};

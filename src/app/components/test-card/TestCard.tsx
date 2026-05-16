// Info icon appears next to both input field labels
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#a4a4a3]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 4V8M7.5 10.5V11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1e1e1c] p-5 font-primary text-font shadow-md">
      {/* Header: Title + Settings Icon */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Settings/configuration icon (circle with orbiting dots) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <circle
            cx="10"
            cy="10"
            r="2"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="3" r="1.5" fill="currentColor" />
          <circle cx="10" cy="17" r="1.5" fill="currentColor" />
          <circle cx="3" cy="10" r="1.5" fill="currentColor" />
          <circle cx="17" cy="10" r="1.5" fill="currentColor" />
          <circle cx="14.5" cy="5.5" r="1.5" fill="currentColor" />
          <circle cx="5.5" cy="14.5" r="1.5" fill="currentColor" />
          <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" />
          <circle cx="14.5" cy="14.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Subtitle with Chevron - shows truncated description */}
      <div className="mb-16 flex items-center gap-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b9291]"
        >
          <path
            d="M1 5L5 1L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section - action to create new design */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path
            d="M2 7L6 3L10 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token - Figma API authentication */}
      <div className="mb-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded bg-[#272822] px-3 py-2 text-[11.5px] leading-[13.92px] text-[#737470] placeholder-[#737470] outline-none"
          style={{ border: "1px solid #a5adad" }}
        />
      </div>

      {/* Design URL - Figma file URL input */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded bg-[#272822] px-3 py-2 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder-[#71726e] outline-none"
          style={{ border: "2px solid #929291" }}
        />
      </div>

      {/* Action Buttons - Primary CTAs */}
      <div className="mb-12 flex gap-3">
        <button className="flex-1 rounded bg-[#A0522D] px-4 py-2 text-[11.5px] leading-[13.92px] text-[#8c8078] transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#A0522D] px-4 py-2 text-[11.5px] leading-[13.92px] text-[#8c8078] transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section - shows history of design breakdowns */}
      <div>
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer - Copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[11.5px] leading-[13.92px] text-[#b5b5b5]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};

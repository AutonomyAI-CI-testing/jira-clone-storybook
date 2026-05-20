/**
 * TestCard component displays a UI Magician Agent card with configuration inputs.
 * 
 * This is a static component showcasing a dark-themed card design with:
 * - Agent header with settings icon
 * - Collapsible "Add New Design" section
 * - Form inputs for Personal Access Token and Design URL
 * - Action buttons (Awesome, Prepare)
 * - Recent Breakdowns section
 * - Footer with copyright
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[280px] rounded bg-[#1C1D17] p-7">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h2>
        {/* Gear/Settings Icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B5B5B5]"
        >
          <path
            d="M7 4.5C5.62 4.5 4.5 5.62 4.5 7C4.5 8.38 5.62 9.5 7 9.5C8.38 9.5 9.5 8.38 9.5 7C9.5 5.62 8.38 4.5 7 4.5ZM12.43 7.75L11.3 6.85C11.35 6.57 11.38 6.29 11.38 6C11.38 5.71 11.35 5.43 11.3 5.15L12.43 4.25C12.54 4.16 12.57 4 12.5 3.87L11.43 2.13C11.36 2 11.2 1.95 11.07 2L9.7 2.56C9.4 2.34 9.08 2.16 8.73 2.03L8.5 0.57C8.48 0.42 8.35 0.31 8.2 0.31H6.06C5.91 0.31 5.78 0.42 5.76 0.57L5.53 2.03C5.18 2.16 4.86 2.34 4.56 2.56L3.19 2C3.06 1.95 2.9 2 2.83 2.13L1.76 3.87C1.69 4 1.72 4.16 1.83 4.25L2.96 5.15C2.91 5.43 2.88 5.71 2.88 6C2.88 6.29 2.91 6.57 2.96 6.85L1.83 7.75C1.72 7.84 1.69 8 1.76 8.13L2.83 9.87C2.9 10 3.06 10.05 3.19 10L4.56 9.44C4.86 9.66 5.18 9.84 5.53 9.97L5.76 11.43C5.78 11.58 5.91 11.69 6.06 11.69H8.2C8.35 11.69 8.48 11.58 8.5 11.43L8.73 9.97C9.08 9.84 9.4 9.66 9.7 9.44L11.07 10C11.2 10.05 11.36 10 11.43 9.87L12.5 8.13C12.57 8 12.54 7.84 12.43 7.75Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtitle Row — truncated text is intentional for the design mockup */}
      <div className="mb-16">
        <span className="text-[11.5px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section — expandable/collapsible trigger indicated by triangle icon */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 0L13.0622 8.25H0.937822L7 0Z"
            fill="#B2B2B1"
          />
        </svg>
        <span className="text-[13.5px] font-semibold text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#A4A4A3]">
            Personal Access Token
          </label>
          {/* Info icon for tooltip/help text */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Information about Personal Access Token"
          >
            <circle cx="8" cy="8" r="7.5" stroke="#A4A4A3" />
            <path
              d="M8 4V4.5M8 6.5V12"
              stroke="#A4A4A3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* readOnly indicates this is display-only in the mockup */}
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-none border border-[#A5ADAD] bg-[#272822] px-3 py-2.5 text-[11.5px] text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#A3A3A2]">
            Design URL
          </label>
          {/* Info icon for tooltip/help text */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Information about Design URL"
          >
            <circle cx="8" cy="8" r="7.5" stroke="#A3A3A2" />
            <path
              d="M8 4V4.5M8 6.5V12"
              stroke="#A3A3A2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* border-2 here vs border for PAT — intentional visual hierarchy */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] text-[#71726E] placeholder-[#71726E] outline-none"
        />
      </div>

      {/* Action Buttons — both share identical styling per design mockup */}
      <div className="mb-8 flex gap-4">
        <button
          type="button"
          className="h-[50px] flex-1 rounded-none bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[50px] flex-1 rounded-none bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-400">© AutonomyAI</p>
      </footer>
    </div>
  );
};

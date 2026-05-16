import cx from "classix";

/**
 * Icon component for the settings gear icon in the header.
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    width="44"
    height="48"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M13 7C13 7.5 12.8 8 12.5 8.3L11.7 9.1C11.6 9.5 11.4 9.9 11.2 10.2L11.3 11.3C11.3 11.7 11.1 12.1 10.7 12.3L9.7 12.8C9.3 13 8.9 13 8.5 12.8L7.5 12.3C7.1 12.3 6.9 12.3 6.5 12.3L5.5 12.8C5.1 13 4.7 13 4.3 12.8L3.3 12.3C2.9 12.1 2.7 11.7 2.7 11.3L2.8 10.2C2.6 9.9 2.4 9.5 2.3 9.1L1.5 8.3C1.2 8 1 7.5 1 7C1 6.5 1.2 6 1.5 5.7L2.3 4.9C2.4 4.5 2.6 4.1 2.8 3.8L2.7 2.7C2.7 2.3 2.9 1.9 3.3 1.7L4.3 1.2C4.7 1 5.1 1 5.5 1.2L6.5 1.7C6.9 1.7 7.1 1.7 7.5 1.7L8.5 1.2C8.9 1 9.3 1 9.7 1.2L10.7 1.7C11.1 1.9 11.3 2.3 11.3 2.7L11.2 3.8C11.4 4.1 11.6 4.5 11.7 4.9L12.5 5.7C12.8 6 13 6.5 13 7Z"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/**
 * Icon component for chevron up indicators.
 */
const ChevronUpIcon = ({ size = "small" }: { size?: "small" | "medium" }): JSX.Element => {
  const dimensions = size === "small" ? { width: "16", height: "10" } : { width: "24", height: "16" };
  const viewBox = size === "small" ? "0 0 8 5" : "0 0 12 8";
  const path = size === "small" ? "M1 4L4 1L7 4" : "M2 6L6 2L10 6";
  const strokeWidth = size === "small" ? "1.5" : "2";
  const stroke = size === "small" ? "#8b9291" : "#a4a4a3";

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

/**
 * Icon component for info circle indicators next to form labels.
 */
const InfoIcon = (): JSX.Element => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7.5 10.5V7.5"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="7.5" cy="5" r="0.75" fill="#a4a4a3" />
  </svg>
);

/**
 * TestCard component displaying a UI configuration form for the UI magician Agent.
 * Features sections for header, subtitle, design configuration (token and URL inputs),
 * action buttons, recent breakdowns, and a footer with copyright notice.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-[508px] rounded-md bg-[#1a1a14] p-10 font-['Inter'] font-semibold"
      )}
    >
      {/* Header Section */}
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-[48px] font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <SettingsIcon />
      </header>

      {/* Subtitle Row */}
      <div className="mb-16 flex items-center gap-3">
        <ChevronUpIcon size="small" />
        <p className="text-[23px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <section className="mb-12">
        <div className="mb-10 flex items-center gap-3">
          <ChevronUpIcon size="medium" />
          <h2 className="text-[24px] font-semibold text-[#a4a4a3]">Add New Design</h2>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <label className="text-[24px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#929291] bg-[#272822] px-8 py-8 text-[23px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <label className="text-[24px] font-semibold text-[#a4a4a3]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-8 py-8 text-[23px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
            readOnly
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="rounded bg-[#843a17] px-12 py-5 text-[24px] font-semibold text-[#8c8078]">
            Awesome
          </button>
          <button className="rounded bg-[#843a17] px-12 py-5 text-[24px] font-semibold text-[#8c8078]">
            Prepare
          </button>
        </div>
      </section>

      {/* Recent Breakdowns Section */}
      <section className="mt-20">
        <h2 className="text-[28px] font-semibold text-[#b0b0b0]">Recent Breakdowns</h2>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-300 pt-3 text-center">
        <p>© AutonomyAI</p>
      </footer>
    </div>
  );
};

// Reusable chevron/collapse icon component
const ChevronIcon = ({ color }: { color: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Reusable info icon component
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle cx="6" cy="6" r="5.5" stroke={color} strokeWidth="1" />
    <path
      d="M6 4V6.5M6 8.5V8.51"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div className="w-[254px] bg-black p-5 pb-8 font-primary-light text-font-subtle">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <img
          src="/images/test-card/settings-icon.svg"
          alt="Settings"
          className="h-4 w-[14px]"
        />
      </div>

      {/* Collapsible Section */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronIcon color="#8b9291" />
        <p className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon color="#b2b2b1" />
          <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <label
              htmlFor="personal-access-token"
              className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
            >
              Personal Access Token
            </label>
            <InfoIcon color="#a4a4a3" />
          </div>
          <input
            type="text"
            id="personal-access-token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="h-[50px] w-full rounded border border-[#3a3a3a] bg-transparent px-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:border-[#4a4a4a] focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <label
              htmlFor="design-url"
              className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
            >
              Design URL
            </label>
            <InfoIcon color="#a3a3a2" />
          </div>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="h-[50px] w-full rounded border border-[#3a3a3a] bg-transparent px-3 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:border-[#4a4a4a] focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="h-[48px] flex-1 rounded bg-[#8b5a3c] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9a6342] active:bg-[#7a4e32]"
            aria-label="Awesome button"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[48px] flex-1 rounded bg-[#8b5a3c] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9a6342] active:bg-[#7a4e32]"
            aria-label="Prepare button"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-12">
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};

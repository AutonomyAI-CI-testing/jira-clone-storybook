const GearIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M19.4 13.5a7.7 7.7 0 0 0 .05-1l2.05-1.6-2-3.46-2.45.7a7.4 7.4 0 0 0-1.73-1L15 4.5h-4l-.32 2.64a7.4 7.4 0 0 0-1.73 1l-2.45-.7-2 3.46L6.55 12.5a7.7 7.7 0 0 0 0 2l-2.05 1.6 2 3.46 2.45-.7a7.4 7.4 0 0 0 1.73 1L11 22.5h4l.32-2.64a7.4 7.4 0 0 0 1.73-1l2.45.7 2-3.46-2.05-1.6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
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
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M8 7.2v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5" r="0.9" fill="currentColor" />
  </svg>
);

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[320px] rounded-md bg-[#1C1D17] px-5 py-5 text-[#C8C7C1] font-sans">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[18px] font-medium leading-none text-[#E8E7E2]">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-[#A8A79F] hover:text-[#E8E7E2]"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed section row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[14px] text-[#A8A79F]"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#D4D3CD]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2 text-[13px] text-[#C8C7C1]">
              <span>Personal Access Token</span>
              <span className="text-[#8A897F]">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6B6A60] bg-[#24251E] px-3 py-2.5 text-[13px] text-[#BDBCB4] outline-none"
            />
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-[13px] text-[#C8C7C1]">
              <span>Design URL</span>
              <span className="text-[#8A897F]">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8A897F] bg-[#24251E] px-3 py-2.5 text-[13px] text-[#BDBCB4] outline-none"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#A14E1E] px-5 py-2.5 text-[14px] font-medium text-[#D4A07A]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#A14E1E] px-5 py-2.5 text-[14px] font-medium text-[#D4A07A]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-[15px] font-medium text-[#D4D3CD]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

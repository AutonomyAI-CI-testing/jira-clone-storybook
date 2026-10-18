const GearIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 16.4v-4.8" />
    <path d="M12 8.1h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1A1A1A] px-10 pb-24 pt-10 font-primary text-[#E8E8E8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-10 flex items-center gap-4 text-[#9A9A9A]">
        <ChevronUpIcon />
        <p className="truncate font-primary-bold text-[20px]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-40 flex items-center gap-4">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[26px] leading-none">
          Add New Design
        </h2>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-5">
          <label
            htmlFor="test-card-token"
            className="font-primary-bold text-[20px] text-[#C9C9C9]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-7 w-full rounded border-2 border-[#8C8C8C] bg-[#262626] px-10 py-[26px] font-primary text-[20px] text-[#C9C9C9] placeholder:text-[#7A7A7A]"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-5">
          <label
            htmlFor="test-card-url"
            className="font-primary-bold text-[20px] text-[#C9C9C9]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-7 w-full rounded border-2 border-[#8C8C8C] bg-[#262626] px-10 py-[26px] font-primary text-[20px] text-[#C9C9C9] placeholder:text-[#7A7A7A]"
        />
      </div>

      <div className="mt-12 flex justify-center gap-9">
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#A0431A] py-[22px] font-primary-bold text-[20px] text-[#C8C8C8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#A0431A] py-[22px] font-primary-bold text-[20px] text-[#C8C8C8]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[26px] leading-none text-[#C9C9C9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

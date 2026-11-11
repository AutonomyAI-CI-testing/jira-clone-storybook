export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-11 pt-11 pb-32 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[20px] leading-7 text-[#c9c9c9]">
          UI magician Agent
        </h1>
        <GearIcon className="h-[26px] w-[26px] shrink-0 text-[#c9c9c9]" />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#c9c9c9]" />
        <p className="min-w-0 truncate text-[17px] leading-6 text-[#9a9a9a]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#e6e6e6]" />
        <h2 className="font-primary-bold text-[22px] leading-8 text-[#f0f0f0]">
          Add New Design
        </h2>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-access-token"
            className="text-[16px] leading-6 text-[#d0d0d0]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#8a8a8a]" />
        </div>
        <input
          id="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-8 w-full rounded border border-[#5a5a5a] bg-[#282828] px-4 py-4 text-[16px] leading-6 text-[#d0d0d0] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="text-[16px] leading-6 text-[#d0d0d0]"
          >
            Design URL
          </label>
          <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#8a8a8a]" />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file:"
          className="mt-8 w-full rounded border border-[#5a5a5a] bg-[#282828] px-4 py-4 text-[16px] leading-6 text-[#d0d0d0] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-16 flex justify-end gap-[34px]">
        <button
          type="button"
          className="w-[169px] rounded-md bg-[#a34a28] py-5 text-[18px] leading-6 text-[#cfc4c0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[169px] rounded-md bg-[#a34a28] py-5 text-[18px] leading-6 text-[#cfc4c0]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[20px] leading-7 text-[#f0f0f0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.25v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface IconProps {
  className?: string;
}

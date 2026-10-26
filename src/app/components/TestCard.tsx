const GEAR_TOOTH_ANGLES = [0, 60, 120, 180, 240, 300];

const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5.5" />
    {GEAR_TOOTH_ANGLES.map((angle) => (
      <rect
        key={angle}
        x="10.6"
        y="2.5"
        width="2.8"
        height="4.5"
        rx="1.4"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.25v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#131313] px-10 py-10 font-primary-light text-base text-[#b0b0b0]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="text-[#e6e6e6]">
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-4 text-[#9a9a9a]">
        <ChevronUpIcon className="shrink-0 text-[#b0b0b0]" />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-4">
        <ChevronUpIcon className="shrink-0 text-[#e6e6e6]" />
        <h2 className="font-primary-bold text-2xl text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <label htmlFor="test-card-token">Personal Access Token</label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        name="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[#4a4a4a] bg-[#1e1e1e] px-5 py-4 text-[#e6e6e6] placeholder:text-[#8a8a8a]"
      />

      <div className="mt-6 flex items-center gap-3">
        <label htmlFor="test-card-design-url">Design URL</label>
        <InfoIcon />
      </div>
      <input
        id="test-card-design-url"
        name="test-card-design-url"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[#4a4a4a] bg-[#1e1e1e] px-5 py-4 text-[#e6e6e6] placeholder:text-[#8a8a8a]"
      />

      <div className="mt-9 flex justify-center gap-9">
        <button
          type="button"
          className="rounded-lg bg-[#9e3f14] px-10 py-5 font-primary text-lg text-[#b5b5b5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#9e3f14] px-10 py-5 font-primary text-lg text-[#b5b5b5]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-2xl text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

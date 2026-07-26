export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[340px] bg-[#1a1a1a] px-6 py-6 font-sans text-neutral-300"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-neutral-200">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mb-8 flex items-center gap-2 text-neutral-400">
        <ChevronUpIcon className="opacity-70" />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      <div className="mb-5 flex items-center gap-2 text-neutral-300">
        <ChevronUpIcon />
        <span className="text-base font-medium">Add New Design</span>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-neutral-300">Personal Access Token</label>
          <InfoIcon />
        </div>
        <div className="rounded border border-neutral-600 bg-[#2a2a2a] px-3 py-2.5 text-sm text-neutral-400">
          figd_xxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-neutral-300">Design URL</label>
          <InfoIcon />
        </div>
        <div className="rounded border border-neutral-400 bg-[#2a2a2a] px-3 py-2.5 text-sm text-neutral-300">
          https://www.figma.com/file/:
        </div>
      </div>

      <div className="mb-10 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a84b2f] px-4 py-2.5 text-sm font-medium text-neutral-200"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a84b2f] px-4 py-2.5 text-sm font-medium text-neutral-200"
        >
          Prepare
        </button>
      </div>

      <div className="text-base font-medium text-neutral-300">
        Recent Breakdowns
      </div>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-neutral-400"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M3 7.5L6 4.5L9 7.5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-neutral-500"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

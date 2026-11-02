/**
 * Smoke-test component drawn from a Figma frame.
 *
 * Self-contained on purpose: no props, no imports, no app state. The frame is a
 * fixed dark panel that is not part of the app's themed surfaces, so the palette
 * is written as arbitrary values rather than semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1e1e1e] px-8 pt-11 font-primary text-[#d9d9d9]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px]">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#d9d9d9]">
        <GearIcon className="h-6 w-6" />
      </button>
    </div>

    {/* Collapsed section row */}
    <div className="mt-11 flex items-center gap-3 text-[#b0b0b0]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-[17px]">From entire frame to a singl...</span>
    </div>

    {/* Empty band, as in the frame */}
    <div className="h-40" />

    {/* Section heading */}
    <div className="flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-14">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-access-token" className="text-[17px]">
          Personal Access Token
        </label>
        <InfoIcon className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-7 h-16 w-full rounded border border-[#a8a8a8] bg-[#2b2b2b] pl-7 text-[17px] placeholder:text-[#8f8f8f]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-9">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-design-url" className="text-[17px]">
          Design URL
        </label>
        <InfoIcon className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-design-url"
        placeholder="https://www.figma.com/file/"
        className="mt-5 h-16 w-full rounded border border-[#a8a8a8] bg-[#2b2b2b] pl-7 text-[17px] placeholder:text-[#8f8f8f]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[50px] flex gap-8 pl-14">
      <button
        type="button"
        className="h-[60px] w-[172px] rounded-md bg-[#a03c14] font-primary-bold text-[20px] text-[#cbb3a5]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[60px] w-[172px] rounded-md bg-[#a03c14] font-primary-bold text-[20px] text-[#cbb3a5]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[70px] font-primary-bold text-[24px] text-[#c0c0c0]">
      Recent Breakdowns
    </h2>
  </div>
);

const GearIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent"
 * Figma frame. Self-contained — no props, no state, no interactivity.
 * Colours are taken from the design as literal values because the frame is a
 * third-party dark panel with no equivalent in the app's semantic token set.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1b1b1b] px-9 py-10 font-primary text-[#e6e6e6]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-[24px] text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsed frame summary */}
      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5" />
        <span className="font-primary-light text-[18px] text-[#c9c9c9]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-36 flex items-center gap-4">
        <ChevronUpIcon className="h-6 w-6" />
        <h2 className="font-primary-black text-[26px] text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-12 flex items-center gap-3">
        <label
          htmlFor="personal-access-token"
          className="font-primary text-[22px] text-[#e0e0e0]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-6 h-[64px] w-full rounded border-2 border-[#8f8f8f] bg-[#2b2b2b] px-9 font-primary text-[22px] text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]"
      />

      {/* Design URL */}
      <div className="mt-8 flex items-center gap-3">
        <label
          htmlFor="design-url"
          className="font-primary text-[22px] text-[#e0e0e0]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-6 h-[70px] w-full rounded border-2 border-[#8f8f8f] bg-[#2b2b2b] px-9 font-primary text-[22px] text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]"
      />

      {/* Actions */}
      <div className="ml-12 mt-12 flex gap-8">
        <button
          type="button"
          className="h-[74px] w-[170px] rounded-lg bg-[#a3431a] font-primary text-[22px] text-[#d6a58c]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[74px] w-[170px] rounded-lg bg-[#a3431a] font-primary text-[22px] text-[#d6a58c]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-20 font-primary-black text-[26px] text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const SettingsIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 shrink-0"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

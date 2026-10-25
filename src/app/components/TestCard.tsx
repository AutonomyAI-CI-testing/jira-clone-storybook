/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel.
 *
 * Smoke-test component: no props, no state, nothing interactive. Colours are
 * literal hex values on purpose — the panel's charcoal/rust palette has no
 * equivalent in the semantic token set, and the card must render identically
 * in every theme without depending on one.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[28px] leading-none">
          UI magician Agent
        </h2>
        <SettingsIcon className="text-[#e8e8e8]" />
      </div>

      <div className="mt-8 flex items-center gap-3 text-[#9e9e9e]">
        <ChevronUpIcon className="shrink-0" />
        <span className="min-w-0 flex-1 truncate text-[20px]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[150px] flex items-center gap-3">
        <ChevronUpIcon className="shrink-0 text-[#e8e8e8]" />
        <h3 className="font-primary-bold text-[28px] leading-none">
          Add New Design
        </h3>
      </div>

      <div className="mt-[56px]">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-token" className="text-[20px] text-[#d4d4d4]">
            Personal Access Token
          </label>
          <InfoIcon className="shrink-0 text-[#d4d4d4]" />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mt-6 h-[70px] w-full rounded-[2px] border border-[#6b6b6b] bg-[#2a2a2a] px-4 text-[20px] text-[#e8e8e8] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className="text-[20px] text-[#d4d4d4]">
            Design URL
          </label>
          <InfoIcon className="shrink-0 text-[#d4d4d4]" />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-6 h-[70px] w-full rounded-[2px] border border-[#6b6b6b] bg-[#2a2a2a] px-4 text-[20px] text-[#e8e8e8] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-[50px] flex gap-9">
        <button
          type="button"
          className="h-[73px] flex-1 rounded-[6px] bg-[#a8410f] text-[20px] text-[#d9d9d9] hover:bg-[#bf4d13] active:bg-[#8f370c]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[73px] flex-1 rounded-[6px] bg-[#a8410f] text-[20px] text-[#d9d9d9] hover:bg-[#bf4d13] active:bg-[#8f370c]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[100px] font-primary-bold text-[26px] leading-none">
        Recent Breakdowns
      </h3>
    </div>
  );
};

interface IconProps {
  className?: string;
}

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11.5v5" strokeLinecap="round" />
    <path d="M12 7.5v.01" strokeLinecap="round" strokeWidth="2.4" />
  </svg>
);

const SettingsIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

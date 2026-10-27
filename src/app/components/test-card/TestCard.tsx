/**
 * TestCard — a static, self-contained recreation of the "UI magician Agent /
 * Add New Design" panel from the Figma frame (node 2-2).
 *
 * Smoke-test fixture: it takes no props, holds no state and is not wired into
 * any screen. Colours are literal values sampled from the frame because the
 * frame's near-black + rust palette has no equivalent in this project's
 * semantic token set.
 */

const SettingsIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ size = 18 }: { size?: number }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.25" />
    <path d="M12 11v5.25" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FIELD_CLASS =
  "mt-4 h-[76px] w-full rounded-sm border border-[#6b6b6b] bg-[#2b2b2b] px-7 text-[17px] text-[#cfcfcf] placeholder:text-[#6e6e6e]";

const BUTTON_CLASS =
  "h-[52px] w-[168px] rounded-lg bg-[#9d3f18] text-[20px] text-white/60";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 pb-10 pt-8 font-primary-light text-[#f2f2f2]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-[22px] leading-none">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#f2f2f2]"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-3">
        <span className="shrink-0">
          <ChevronUpIcon />
        </span>
        <span className="truncate text-[17px] text-[#e8e8e8]">
          From entire frame to a single component
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[90px] flex items-center gap-3">
        <span className="shrink-0">
          <ChevronUpIcon size={22} />
        </span>
        <h3 className="font-primary-black text-[24px] leading-none">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-9">
        <div className="flex items-center gap-6">
          <label
            htmlFor="test-card-token"
            className="text-[17px] text-[#cfcfcf]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASS}
        />
      </div>

      {/* Design URL */}
      <div className="mt-9">
        <div className="flex items-center gap-6">
          <label
            htmlFor="test-card-design-url"
            className="text-[17px] text-[#cfcfcf]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASS}
        />
      </div>

      {/* Actions */}
      <div className="mt-[90px] flex gap-9 pl-[50px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[90px] font-primary-black text-[24px] leading-none">
        Recent Breakdowns
      </h3>
    </div>
  );
};

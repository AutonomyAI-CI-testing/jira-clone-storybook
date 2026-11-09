/**
 * Smoke-test component: reproduces the "UI magician Agent" panel from the
 * supplied Figma frame. Static, takes no props, and is not routed anywhere —
 * it exists to check the design-to-component path end to end.
 */

const GearIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    height="16"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUpIcon = ({ width = 12, height = 8, className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={height}
    viewBox="0 0 12 8"
    width={width}
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>
);

const InfoIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 6.6v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <circle cx="7.5" cy="4.4" fill="currentColor" r="0.9" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      className="w-[254px] bg-black px-5 pt-5 pb-[62px]"
      id="testElem"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <GearIcon className="text-[color:var(--DarkNeutral1000)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
          height={5}
          width={8}
        />
        <span className="truncate font-primary text-2xs text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon className="shrink-0 text-[color:var(--DarkNeutral900)]" />
        <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-4">
        <label
          className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
          htmlFor="test-card-token"
        >
          Personal Access Token
        </label>
        <InfoIcon className="text-[color:var(--DarkNeutral900)]" />
      </div>
      <input
        className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral250)] pl-[19px] font-primary text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        type="text"
      />

      <div className="mt-3 flex items-center gap-4">
        <label
          className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
          htmlFor="test-card-url"
        >
          Design URL
        </label>
        <InfoIcon className="text-[color:var(--DarkNeutral900)]" />
      </div>
      <input
        className="mt-2 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral250)] pl-[19px] font-primary text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
        id="test-card-url"
        placeholder="https://www.figma.com/file/:"
        type="text"
      />

      <div className="mt-6 flex gap-[17px] pl-6">
        <button
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[color:var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]"
          type="button"
        >
          Awesome
        </button>
        <button
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[color:var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]"
          type="button"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

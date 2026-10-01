/*
 * TestCard — a self-contained panel reproducing the "UI magician Agent" frame.
 *
 * The frame is a fixed dark panel belonging to another product, so the palette
 * is pinned as literal values rather than the app's semantic tokens: the tokens
 * follow the active light/dark theme, and there is no rust accent in the theme.
 * All values are approximations read off the design image.
 */

const buttonClasses =
  "min-w-0 flex-1 rounded-[10px] bg-[#a03e1c] px-6 py-4 font-primary-bold text-[18px] text-[#bcaea8] hover:bg-[#8f3719]";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-[22px] w-[22px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1.03z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px] shrink-0"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.4" />
    <path d="M12 11.2v5.4" strokeLinecap="round" />
    <circle cx="12" cy="7.7" r="0.95" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className="font-primary-bold text-[17px] text-[#e0e0e0]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-[2px] border border-[#6f6f6f] bg-[#232323] px-4 py-4 font-primary-light text-[16px] text-[#c8c8c8] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[#1c1c1c] px-8 py-10 font-primary text-[16px] text-[#c8c8c8]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[20px] text-[#e6e6e6]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      <div className="mt-9 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[16px] text-[#cfcfcf]">
          From entire frame to a singl...
        </span>
      </div>

      <h3 className="mt-[52px] flex items-center gap-3 font-primary-bold text-[22px] text-[#e6e6e6]">
        <ChevronUpIcon />
        Add New Design
      </h3>

      <div className="mt-8 space-y-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-7 flex items-center gap-5">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[72px] font-primary-bold text-[22px] text-[#e6e6e6]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

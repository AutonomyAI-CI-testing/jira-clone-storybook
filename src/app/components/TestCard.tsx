/**
 * Smoke-test component: renders the attached Figma frame (a dark "UI magician
 * Agent" plugin panel) as fixed markup. Self-contained by design — no props, no
 * state, nothing wired to real data.
 *
 * The frame's dark palette and its rust action buttons have no equivalent in the
 * design system's semantic tokens, so those colours are literals taken from the
 * frame rather than `background-*` / `font-*` utilities.
 */

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? "h-[22px] w-[22px] shrink-0"}
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px] shrink-0"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[19px] w-[19px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16.5v-4.5" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldClassName =
  "mt-5 h-[66px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#262626] px-[38px] font-primary-light text-[16px] text-[#e0e0e0] placeholder:text-[#7c7c7c]";

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => (
  <div className="flex items-center gap-3">
    <label
      htmlFor={htmlFor}
      className="font-primary-bold text-[16px] leading-none text-[#b8b8b8]"
    >
      {children}
    </label>
    <span className="text-[#8a8a8a]">
      <InfoIcon />
    </span>
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1d1d1d] px-[42px] pb-[110px] pt-[44px] font-primary"
  >
    {/* Panel header */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[17px] leading-none text-[#c9c9c9]">
        UI magician Agent
      </h2>
      <span className="text-[#d0d0d0]">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed summary */}
    <div className="mt-[32px] flex items-center gap-3">
      <span className="text-[#8a8a8a]">
        <ChevronUpIcon />
      </span>
      <p className="truncate font-primary-light text-[15px] text-[#8a8a8a]">
        From entire frame to a singl...
      </p>
    </div>

    {/* Add New Design */}
    <div className="mt-[150px] flex items-center gap-3">
      <span className="text-[#c9c9c9]">
        <ChevronUpIcon className="h-[26px] w-[26px] shrink-0" />
      </span>
      <h3 className="font-primary-bold text-[22px] leading-none text-[#c9c9c9]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[60px]">
      <FieldLabel htmlFor="testElem-personal-access-token">
        Personal Access Token
      </FieldLabel>
      <input
        id="testElem-personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClassName}
      />
    </div>

    {/* Design URL */}
    <div className="mt-[34px]">
      <FieldLabel htmlFor="testElem-design-url">Design URL</FieldLabel>
      <input
        id="testElem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldClassName}
      />
    </div>

    {/* Actions */}
    <div className="mt-[48px] flex items-center justify-between pl-[46px]">
      <button
        type="button"
        className="h-[75px] w-[170px] rounded-[8px] bg-[#80340f] font-primary-bold text-[19px] text-[#a8a5a0]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[75px] w-[170px] rounded-[8px] bg-[#80340f] font-primary-bold text-[19px] text-[#a8a5a0]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[105px] font-primary-bold text-[21px] leading-none text-[#c9c9c9]">
      Recent Breakdowns
    </h3>
  </div>
);

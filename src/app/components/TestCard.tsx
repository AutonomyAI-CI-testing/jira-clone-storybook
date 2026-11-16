/**
 * TestCard — a self-contained smoke-test component.
 *
 * It recreates the cropped Figma frame of the "UI magician Agent" panel: a dark
 * surface with a settings gear, a collapsed row, an "Add New Design" section
 * holding two labelled inputs, a two-button row and a "Recent Breakdowns"
 * heading.
 *
 * It is deliberately outside the design-system token layer: the frame is a dark
 * UI whose colours have no matching semantic token, and it takes no props, holds
 * no state and is not attached to any route.
 */

type IconProps = {
  className?: string;
};

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5V16.5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const fieldLabel = "text-base text-[#d4d4d4]";
const inputClasses =
  "h-[68px] w-full border border-[#8f8f8f] bg-[#2b2b2b] px-4 text-base text-[#d4d4d4] outline-none placeholder:text-[#8f8f8f]";
const buttonClasses =
  "h-[74px] w-[170px] rounded-lg bg-[#a8422a] text-lg text-[#9e9e9e]";

const FieldLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className={fieldLabel}>
      {label}
    </label>
    <InfoIcon className="h-[22px] w-[22px] shrink-0" />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pt-11 pb-[120px] font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl text-[#e8e8e8]">
        UI magician Agent
      </span>
      <GearIcon className="h-6 w-6 shrink-0 text-[#e8e8e8]" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#8f8f8f]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-[150px] flex items-center gap-3 font-primary-bold text-2xl text-[#d4d4d4]">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      Add New Design
    </h2>

    <div className="mt-10 flex flex-col gap-5">
      <FieldLabel label="Personal Access Token" htmlFor="figma-access-token" />
      <input
        id="figma-access-token"
        className={inputClasses}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8 flex flex-col gap-5">
      <FieldLabel label="Design URL" htmlFor="figma-design-url" />
      <input
        id="figma-design-url"
        className={inputClasses}
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-11 flex gap-9">
      <button type="button" className={buttonClasses}>
        Awesome
      </button>
      <button type="button" className={buttonClasses}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[104px] font-primary-bold text-xl text-[#8f8f8f]">
      Recent Breakdowns
    </h2>
  </div>
);

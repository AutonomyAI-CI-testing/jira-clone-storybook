import cx from "classix";

/**
 * Smoke-test component built from a Figma frame. It exists to prove the
 * design-to-code path renders on screen, not to be pixel-accurate.
 *
 * Self-contained by design: no props, no state, no event handlers, and no
 * imports from the rest of the app. The frame's dark palette is expressed as
 * Tailwind arbitrary values rather than semantic tokens — the product's themes
 * are light-anchored and have no equivalent for this panel's colours.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-10 py-12 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <GearIcon className="mt-0.5 text-[#e8e8e8]" />
      </div>

      <div className="mt-12 flex items-center gap-3">
        <ChevronUpIcon className="text-[#8f8f8f]" />
        <p className="font-primary-light text-base text-[#8f8f8f]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <ChevronUpIcon className="text-[#dcdcdc]" />
        <h2 className="font-primary-bold text-2xl text-[#dcdcdc]">
          Add New Design
        </h2>
      </div>

      <div className="mt-14 space-y-8">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex gap-8 pl-12">
        <PanelButton label="Awesome" />
        <PanelButton label="Prepare" />
      </div>

      <h2 className="mt-20 font-primary-bold text-2xl text-[#cfcfcf]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-10">
      <label htmlFor={id} className="font-primary-bold text-lg text-[#cfcfcf]">
        {label}
      </label>
      <InfoIcon className="text-[#cfcfcf]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-6 w-full rounded-none border-2 border-[#8c8c8c] bg-[#2b2b2b] px-10 py-5 font-primary-light text-lg text-[#c9c9c9] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[72px] min-w-[170px] rounded-lg bg-[#a8401c] font-primary-bold text-lg text-[#d0d0d0] hover:bg-[#96391a]"
  >
    {label}
  </button>
);

const ChevronUpIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const GearIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  label: string;
}

export default TestCard;

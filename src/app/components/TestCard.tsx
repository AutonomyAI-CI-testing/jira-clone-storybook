/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke-test component: it takes no props, holds no state and is not wired into any
 * route. Its colours are the design's own values written as Tailwind arbitrary
 * values, because the token palette in `tailwind.config.js` carries no equivalent
 * for the panel's rust accent.
 */

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m6 14.5 6-5.5 6 5.5" />
  </svg>
);

const DoubleChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 12.5 7-6 7 6" />
    <path d="m5 18 7-6 7 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.2v5" strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="mb-3 flex items-center gap-3">
      <span className="font-primary-bold text-[17px] text-[#eaeaea]">
        {label}
      </span>
      <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#eaeaea]" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#3d3d3d] bg-[#1b1b1b] px-4 py-[18px] text-[17px] text-[#f2f2f2] placeholder:text-[#8b8b8b]"
    />
  </label>
);

const ActionButton = ({ label }: ActionLabelProps): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[#9e3b13] px-8 py-[14px] text-[18px] text-[#d9ced6] hover:bg-[#8a3210] active:bg-[#772b0d]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] max-w-full bg-[#0f0f0f] px-10 py-10 font-primary text-[#f2f2f2]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-[26px] leading-tight">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-0.5"
        >
          <GearIcon className="h-7 w-7 shrink-0 text-[#f2f2f2]" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#d0d0d0]" />
        <span className="truncate text-[19px] text-[#d0d0d0]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[150px]" aria-hidden="true" />

      <div className="flex items-center gap-2">
        <DoubleChevronUpIcon className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-black text-[26px] leading-tight">
          Add New Design
        </h2>
      </div>

      <div className="mt-8 space-y-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex justify-center gap-9">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-24 font-primary-black text-[22px]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionLabelProps {
  label: string;
}

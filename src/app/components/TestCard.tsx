/**
 * TestCard — a static, self-contained recreation of the "UI magician Agent"
 * panel from the Figma frame supplied with the design review.
 *
 * It accepts no props and holds no state: it renders a fixed-width dark panel
 * as-is. That panel's dark/rust palette has no equivalent in the app's semantic
 * token set, so its colours are carried as Tailwind arbitrary values rather
 * than theme tokens. The departure is deliberate and local to this component —
 * no shared token or theme block is affected.
 */

const ACTIONS = ["Awesome", "Prepare"];

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
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
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11 17h2v-6h-2v6Zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8ZM11 9h2V7h-2v2Z" />
  </svg>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => {
  const inputId = `test-card-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <label
          htmlFor={inputId}
          className="font-primary text-[17px] text-[#d0d0d0]"
        >
          {label}
        </label>
        <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#e0e0e0]" />
      </div>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className="mt-3 h-[70px] w-full rounded-[6px] border border-[#8a8a8a] bg-[#303030] px-[18px] font-primary text-[17px] text-[#e0e0e0] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pb-10 pt-[30px] font-primary text-[#d0d0d0]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[24px] text-[#e8e8e8]">
        UI magician Agent
      </h2>
      <GearIcon className="h-[26px] w-[26px] shrink-0 text-[#e0e0e0]" />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#c0c0c0]" />
      <span className="font-primary text-[17px] text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-[130px] flex items-center gap-3 font-primary-bold text-[22px] text-[#e8e8e8]">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      Add New Design
    </h2>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-7"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-[34px]">
      {ACTIONS.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded-[8px] bg-[#9c3a12] px-[38px] py-[24px] font-primary text-[19px] text-[#b8b8b8]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[110px] font-primary-bold text-[22px] text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

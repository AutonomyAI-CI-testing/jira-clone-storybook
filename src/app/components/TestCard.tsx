import cx from "classix";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11v5.5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-5 w-5 shrink-0", className)}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-7">
    <div className="flex items-center gap-6">
      <label htmlFor={id} className="text-[19px] text-[#c6c9cc]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-7 h-[68px] w-full rounded-[2px] border-[2px] border-[#8e8e8e] bg-[#1e1e1e] px-10 text-[18px] text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-[64px] w-[170px] rounded-[8px] bg-[#a83c15] text-[20px] text-[#c9a99b]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#191919] px-10 pt-10 pb-24 font-primary text-[#c9cccf]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] text-[#d0d3d6]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-9 flex items-center gap-3 text-[19px] text-[#9aa0a6]">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-40 mb-14 flex items-center gap-3">
        <ChevronUpIcon className="text-[#d0d3d6]" />
        <h2 className="font-primary-bold text-[24px] text-[#d0d3d6]">
          Add New Design
        </h2>
      </div>

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

      <div className="mt-12 flex gap-9 pl-12">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-24 font-primary-bold text-[24px] text-[#d0d3d6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

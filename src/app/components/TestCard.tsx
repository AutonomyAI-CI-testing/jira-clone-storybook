const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6 shrink-0 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const CollapsibleRow = ({
  label,
  textClassName,
}: {
  label: string;
  textClassName: string;
}) => (
  <div className="flex items-center gap-3">
    <ChevronUpIcon />
    <span className={textClassName}>{label}</span>
  </div>
);

const FieldLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3">
    <span className="font-primary-light text-[17px] text-[#c9c9c9]">
      {label}
    </span>
    <InfoIcon />
  </div>
);

const Field = ({ placeholder }: { placeholder: string }) => (
  <div className="rounded-md border border-[#6b6b6b] bg-[#2b2b2b] px-5 py-5 font-primary-light text-[17px] text-[#8c8c8c]">
    {placeholder}
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 pb-24 pt-10 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-10">
        <CollapsibleRow
          label="From entire frame to a singl..."
          textClassName="font-primary-light text-[17px] text-[#8c8c8c]"
        />
      </div>

      <div className="mt-40">
        <CollapsibleRow
          label="Add New Design"
          textClassName="font-primary-bold text-2xl"
        />
      </div>

      <div className="mt-16 flex flex-col gap-3">
        <FieldLabel label="Personal Access Token" />
        <Field placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <FieldLabel label="Design URL" />
        <Field placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex gap-12">
        {ACTIONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[85px] flex-1 rounded-lg bg-[#a83c14] font-primary text-xl text-[#f5d9ce]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-24 font-primary-bold text-[26px] text-[#d0d0d0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

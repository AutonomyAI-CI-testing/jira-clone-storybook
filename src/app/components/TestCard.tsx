const ICON_CLASS_NAME = "h-[18px] w-[18px] shrink-0";

const ChevronUpIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS_NAME}
      aria-hidden="true"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-[16px] w-[16px] shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

const GearIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[20px] w-[20px] shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-primary-light text-[11.5px] text-[#b5b5b5]">
          {label}
        </span>
        <InfoIcon />
      </div>
      <div className="rounded-[2px] border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span className="font-primary-light text-[11.5px] text-[#737470]">
          {placeholder}
        </span>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[320px] bg-[#000000] px-5 py-6 text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate font-primary-light text-[13.5px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[80px]" />

      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

      <div className="mt-6 flex gap-[18px]">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="flex h-[36px] w-[84px] items-center justify-center rounded bg-[#843a17] font-primary-light text-[13.5px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-14">
        <span className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;

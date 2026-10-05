// Static reproduction of an external Figma frame (the "UI magician Agent" plugin panel).
// Colours and sizes are approximations read from the frame image rather than the
// product's design tokens, because the frame is rendered as drawn.

const inputClassName =
  "h-[68px] w-full rounded-sm border border-[#8a8a8a] bg-[#1f1f1f] px-9 text-xl text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]";

const buttonClassName =
  "h-[75px] flex-1 rounded-md bg-[#a8451c] text-2xl font-medium text-[#dcb9a8]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1b1b1b] px-10 pb-28 pt-10 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl text-[#c9c9c9]">
          UI magician Agent
        </h1>
        <GearIcon className="h-7 w-7 shrink-0 text-[#c0c0c0]" />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#c0c0c0]" />
        <span className="truncate text-xl text-[#8f8f8f]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#c0c0c0]" />
        <h2 className="font-primary-bold text-2xl text-[#f2f2f2]">
          Add New Design
        </h2>
      </div>

      <Field
        className="mt-14"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-7"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-14 flex gap-9 pl-11">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-2xl text-[#f2f2f2]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ className, label, placeholder }: FieldProps) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span className="text-xl text-[#d0d0d0]">{label}</span>
        <InfoIcon className="h-8 w-8 shrink-0 text-[#c0c0c0]" />
      </div>
      <input
        readOnly
        placeholder={placeholder}
        className={`mt-7 ${inputClassName}`}
      />
    </div>
  );
};

interface FieldProps {
  className: string;
  label: string;
  placeholder: string;
}

interface IconProps {
  className: string;
}

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11.2v6" strokeLinecap="round" />
    <circle cx="12" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.4" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

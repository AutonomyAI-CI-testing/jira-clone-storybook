const GearIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    className="h-4 w-4 shrink-0 text-[#b5b5b5]"
  >
    <circle cx="8" cy="8" r="2.4" />
    <circle cx="8" cy="8" r="5.5" strokeDasharray="2.1 2.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.3v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0 text-[#a4a4a3]"
  >
    <path d="M3 10.5 8 5.5l5 5" />
  </svg>
);

const SectionRow = ({ label, className }: { label: string; className: string }) => (
  <div className="flex items-center gap-2">
    <ChevronUpIcon />
    <span className={className}>{label}</span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  /** The frame draws the Design URL field with a heavier 2px border. */
  emphasised?: boolean;
}

const Field = ({ label, placeholder, emphasised = false }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-6">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={`h-[37px] w-full rounded-[2px] bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470] ${
        emphasised ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      }`}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#0b0b0b] p-2">
    <div className="flex h-[492px] w-full flex-col rounded-[8px] bg-[#1c1c1c] px-5 py-5">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-5">
        <SectionRow
          label="From entire frame to a singl..."
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]"
        />
      </div>

      <div className="mt-14">
        <SectionRow
          label="Add New Design"
          className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]"
        />
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" emphasised />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);

export default TestCard;

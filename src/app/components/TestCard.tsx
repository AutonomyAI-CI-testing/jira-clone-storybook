const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c9c9c9"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="1" fill="#c9c9c9" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  borderColor,
}: {
  id: string;
  label: string;
  placeholder: string;
  borderColor: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-[11.5px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`h-9 w-full rounded border bg-[#272822] px-2.5 font-primary-light text-[11.5px] text-[#e6e6e6] outline-none placeholder:text-[#737470] ${borderColor}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[380px] bg-[#0d0d0d] px-5 py-5">
      <div className="flex items-center justify-between">
        <span className="font-primary text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-7 border-t border-[#242424] pt-4">
        <div className="flex items-center gap-2 text-[#8b9291]">
          <ChevronUpIcon className="h-[5px] w-[8px]" />
          <span className="font-primary text-[11.5px]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 text-[#b2b2b1]">
          <ChevronUpIcon className="h-2 w-3" />
          <span className="font-primary text-[13.5px]">Add New Design</span>
        </div>

        <div className="mt-6 space-y-4">
          <Field
            id="testElem-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            borderColor="border-[#a5adad]"
          />
          <Field
            id="testElem-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
            borderColor="border-2 border-[#929291]"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-10 font-primary text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

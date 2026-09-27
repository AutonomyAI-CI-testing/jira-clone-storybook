const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 6.5L6 1.5L11 6.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 16"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M7 0.8v2.2M7 13v2.2M1.4 4.6l1.9 1.1M10.7 10.3l1.9 1.1M1.4 11.4l1.9-1.1M10.7 5.7l1.9-1.1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M8 7.2v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" />
  </svg>
);

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    inputClass: "border border-[#a5adad]",
    textClass: "text-[11.5px] text-[#737470] placeholder:text-[#737470]",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    inputClass: "border-2 border-[#929291]",
    textClass: "text-[10.5px] text-[#71726e] placeholder:text-[#71726e]",
  },
];

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 py-5 [font-family:Inter,sans-serif]"
    >
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon className="h-[16px] w-[14px] shrink-0" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0" />
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {FIELDS.map((field, index) => (
        <div key={field.label} className="flex flex-col">
          <div
            className={`flex items-center justify-between text-[#a4a4a3] ${
              index === 0 ? "mt-[28px]" : "mt-[11px]"
            }`}
          >
            <span className="text-[11.5px] font-semibold leading-[13.92px]">
              {field.label}
            </span>
            <InfoIcon className="h-[15px] w-[15px] shrink-0" />
          </div>
          <input
            readOnly
            aria-label={field.label}
            placeholder={field.placeholder}
            className={`mt-[12px] h-[37px] w-full rounded-[2px] bg-[#272822] px-3 font-semibold outline-none ${field.inputClass} ${field.textClass}`}
          />
        </div>
      ))}

      <div className="ml-[24px] mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;

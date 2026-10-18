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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
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
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const fields = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    labelClass: "text-[#a4a4a3]",
    inputClass: "h-[36px] border border-[#a5adad]",
    textClass: "text-[11.5px] placeholder:text-[#737470]",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    labelClass: "text-[#a3a3a2]",
    inputClass: "h-[37px] border-2 border-[#929291]",
    textClass: "text-[10.5px] placeholder:text-[#71726e]",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-[16px] w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[10px] w-[10px] shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[50px] h-px w-full bg-[#1f1f1f]" />

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[14px] w-[14px] shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[24px] flex flex-col gap-[24px]">
      {fields.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-2">
            <label
              htmlFor={field.id}
              className={`font-primary-bold text-[11.5px] leading-[14px] ${field.labelClass}`}
            >
              {field.label}
            </label>
            <InfoIcon
              className={`h-[15px] w-[15px] shrink-0 ${field.labelClass}`}
            />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className={`mt-[10px] w-full bg-[#272822] px-[19px] font-primary-bold outline-none ${field.inputClass} ${field.textClass}`}
          />
        </div>
      ))}
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      {actions.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[48px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

interface IconProps {
  className?: string;
}

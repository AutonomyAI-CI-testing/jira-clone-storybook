const GearIcon = (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (
  <svg
    aria-hidden="true"
    className="h-2.5 w-2 shrink-0"
    viewBox="0 0 12 8"
    fill="none"
    stroke="#8b9291"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5M12 8h.01" />
  </svg>
);

const fields = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    borderClassName: "border border-[#a5adad]",
    placeholderColor: "text-[#737470]",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    borderClassName: "border-2 border-[#929291]",
    placeholderColor: "text-[#71726e]",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-black px-5 py-5 font-[Inter]">
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {GearIcon}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {ChevronUpIcon}
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        {ChevronUpIcon}
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {fields.map((field) => (
        <div key={field.label} className="mt-5">
          <div className="flex items-center gap-2">
            <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
              {field.label}
            </span>
            {InfoIcon}
          </div>
          <div
            className={`mt-2 flex h-[37px] items-center bg-[#272822] px-4 ${field.borderClassName}`}
          >
            <span
              className={`text-[11.5px] font-semibold leading-[13.92px] ${field.placeholderColor}`}
            >
              {field.placeholder}
            </span>
          </div>
        </div>
      ))}

      <div className="mt-6 flex items-center gap-[17px]">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-14 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

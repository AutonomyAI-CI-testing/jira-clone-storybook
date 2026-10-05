import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "h-9 w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const fieldLabel = (text: string): JSX.Element => (
  <div className="mt-3 flex items-center gap-2 text-2xs font-primary-bold text-[#a4a4a3]">
    <span>{text}</span>
    <FiInfo aria-hidden="true" className="shrink-0" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black px-5 py-5 font-primary">
    <div className="flex items-center justify-between">
      <span className="text-xs font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2 text-2xs font-primary-bold text-[#8b9291]">
      <FiChevronUp aria-hidden="true" className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2 text-xs font-primary-bold text-[#b2b2b1]">
      <FiChevronUp aria-hidden="true" className="shrink-0" />
      <span>Add New Design</span>
    </div>

    {fieldLabel("Personal Access Token")}
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-2xs font-primary-bold text-[#737470] placeholder:text-[#737470]"
    />

    {fieldLabel("Design URL")}
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-4 text-2xs font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex gap-4 pl-6">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <div className="mt-12 text-xs font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

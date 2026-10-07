import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const RECENT_BREAKDOWNS = [
  { title: "Simple test page", meta: "Breakdown · 2 layers" },
  { title: "UI magician Agent", meta: "Breakdown · 14 layers" },
];

const BUTTON_CLASS =
  "flex-1 rounded bg-[#a8431c] px-6 py-4 font-primary-bold text-[16px] text-[#f0dcd2]";

const INPUT_CLASS =
  "mt-3 w-full rounded border border-[#6b6b6b] bg-[#1f1f1f] px-4 py-3 text-[14px] text-[#e6e6e6] placeholder:text-[#8c8c8c]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-6 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[20px]">UI magician Agent</span>
      <button type="button" aria-label="Settings">
        <FiSettings className="h-6 w-6" aria-hidden />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <FiChevronUp className="h-5 w-5 shrink-0" aria-hidden />
      <span className="truncate text-[16px] text-[#c9c9c9]">
        From entire frame to a single component with all its layers and variants
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp className="h-6 w-6 shrink-0" aria-hidden />
      <span className="font-primary-bold text-[20px]">Add New Design</span>
    </div>

    <div className="mt-8 space-y-6">
      {FIELDS.map((field) => (
        <div key={field.label}>
          <div className="flex items-center gap-2">
            <label
              htmlFor={field.label}
              className="font-primary-bold text-[15px] text-[#a8a8a8]"
            >
              {field.label}
            </label>
            <FiInfo className="h-[18px] w-[18px] text-[#a8a8a8]" aria-hidden />
          </div>
          <input
            id={field.label}
            readOnly
            placeholder={field.placeholder}
            className={INPUT_CLASS}
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex gap-5">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-16">
      <span className="font-primary-bold text-[20px]">Recent Breakdowns</span>
      <ul className="mt-4 space-y-3">
        {RECENT_BREAKDOWNS.map((breakdown) => (
          <li key={breakdown.title} className="rounded bg-[#232323] px-4 py-3">
            <div className="text-[15px]">{breakdown.title}</div>
            <div className="text-[13px] text-[#8c8c8c]">{breakdown.meta}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

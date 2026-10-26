import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const FIELD_CLASS =
  "mt-3 w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-3 text-sm text-[#f0f0f0] outline-none placeholder:text-[#8a8a8a] focus:border-[#9a9a9a]";

const BUTTON_CLASS =
  "w-[170px] rounded-md bg-[#943c19] py-4 font-primary text-[15px] text-[#c9c9c9] hover:bg-[#7f3314]";

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" Figma panel.
 * Takes no props and renders fixed content.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1a19] p-10 font-primary-light text-[#f0f0f0]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg text-[#f0f0f0]">
        UI magician Agent
      </h1>
      <span className="text-[#a8a8a8]">
        <FaCog aria-hidden="true" size={20} />
      </span>
    </div>

    {/* Collapsed section row */}
    <div className="mt-6 flex items-center gap-3 text-[#a8a8a8]">
      <FaChevronUp aria-hidden="true" size={14} className="shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <h2 className="mt-32 flex items-center gap-3 font-primary-bold text-lg text-[#f0f0f0]">
      <FaChevronUp aria-hidden="true" size={16} className="shrink-0" />
      Add New Design
    </h2>

    {/* Labelled fields */}
    <div className="mt-10 flex flex-col gap-6">
      {FIELDS.map(({ label, placeholder }) => (
        <label key={label} className="block">
          <span className="flex items-center gap-2 text-sm text-[#a8a8a8]">
            {label}
            <FaInfoCircle aria-hidden="true" size={14} className="shrink-0" />
          </span>
          <input
            type="text"
            placeholder={placeholder}
            className={FIELD_CLASS}
          />
        </label>
      ))}
    </div>

    {/* Actions */}
    <div className="mt-12 flex gap-8">
      {ACTIONS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-24 font-primary-bold text-lg text-[#f0f0f0]">
      Recent Breakdowns
    </h2>
  </div>
);

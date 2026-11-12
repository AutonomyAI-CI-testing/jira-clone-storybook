import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test panel built from the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state, no data. The fields and buttons are
 * static markup — nothing is wired up. Colours are literal values read off
 * the frame because the frame's warm dark surface has no equivalent in the
 * theme token layer, and the panel is meant to look the same in every theme.
 */

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

const labelRowClass = "flex items-center gap-8 text-[17px] text-[#c9c4bf]";

const fieldInputClass =
  "h-[66px] w-full rounded-none border-2 border-[#8f8a85] bg-[#2b2826] px-9 text-[17px] text-[#e8e3de] placeholder:text-[#8a8580]";

const actionButtonClass =
  "h-[72px] w-[172px] rounded-lg bg-[#8a3a17] text-[20px] text-[#cfc4bb]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1a19] px-10 py-8 font-primary text-[#f2efec]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px]">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[#c9c4bf]"
      >
        <FiSettings size={24} aria-hidden="true" />
      </button>
    </div>

    {/* Collapsed section summary */}
    <div className="mt-10 flex items-center gap-3 text-[17px] text-[#8a8580]">
      <FiChevronUp size={22} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-[160px] flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden="true" />
      <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
    </div>

    <div className="mt-[50px] flex flex-col gap-[30px]">
      {FIELDS.map(({ label, placeholder }) => (
        <div key={label}>
          <div className={labelRowClass}>
            <span>{label}</span>
            <FiInfo size={22} aria-hidden="true" />
          </div>
          <input
            type="text"
            aria-label={label}
            placeholder={placeholder}
            className={`mt-3 ${fieldInputClass}`}
          />
        </div>
      ))}
    </div>

    {/* Actions */}
    <div className="mt-[50px] flex justify-end gap-8">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={actionButtonClass}>
          {action}
        </button>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[90px] font-primary-bold text-[20px]">
      Recent Breakdowns
    </h2>
  </div>
);

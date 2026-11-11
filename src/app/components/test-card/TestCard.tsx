import type { ReactElement } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fields = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const actions = ["Awesome", "Prepare"];

const headingClass = "font-primary-black text-2xl";
const iconClass = "shrink-0 text-[color:var(--DarkNeutral1000)]";
const fieldBoxClass =
  "mt-8 flex h-16 items-center rounded border border-[color:var(--Neutral500)] bg-[var(--DarkNeutral250)] pl-6";

export const TestCard = (): ReactElement => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 pt-9 pb-32 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <span className={headingClass}>UI magician Agent</span>
      <FiSettings size={28} className={iconClass} />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={20} className={iconClass} />
      <span className="text-[18px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <FiChevronUp size={26} className={iconClass} />
      <span className={headingClass}>Add New Design</span>
    </div>

    <div className="mt-14 space-y-7">
      {fields.map(({ label, placeholder }) => (
        <div key={label}>
          <div className="flex items-center gap-10">
            <span className="text-base">{label}</span>
            <FiInfo size={20} className={iconClass} />
          </div>
          <div className={fieldBoxClass}>
            <span className="text-base text-[color:var(--DarkNeutral700)]">
              {placeholder}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-9 pl-12">
      {actions.map((label) => (
        <button
          key={label}
          type="button"
          className="flex h-[76px] w-[168px] items-center justify-center rounded-md bg-[var(--Orange700)] text-lg text-[color:var(--DarkNeutral1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-24">
      <span className={headingClass}>Recent Breakdowns</span>
    </div>
  </div>
);

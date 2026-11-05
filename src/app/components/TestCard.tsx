import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fields = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[340px] rounded-lg bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-base">UI magician Agent</h1>
      <HiOutlineCog size={20} aria-hidden="true" />
    </div>

    <div className="mt-2.5 flex items-center gap-2 text-font-subtlest">
      <HiChevronUp size={16} aria-hidden="true" />
      <span className="truncate text-xs">
        From entire frame to a single component
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-2 font-primary-bold text-base">
      <HiChevronUp size={18} aria-hidden="true" />
      Add New Design
    </h2>

    {fields.map((field) => (
      <label key={field.label} className="mt-5 block first:mt-8">
        <span className="flex items-center gap-3 text-xs">
          {field.label}
          <HiOutlineInformationCircle size={16} aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder={field.placeholder}
          className="mt-2 h-12 w-full rounded border border-border-bold bg-background-input px-5 text-xs placeholder:text-font-subtlest"
        />
      </label>
    ))}

    <div className="mt-8 ml-8 flex gap-6">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="h-12 w-28 rounded-lg bg-[var(--Orange800)] font-primary-bold text-sm text-[var(--DarkNeutral1100)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-bold text-base">Recent Breakdowns</h2>
  </div>
);

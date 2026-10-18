import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const fields = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-6 py-8 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <IoSettingsOutline className="h-6 w-6 text-[var(--DarkNeutral700)]" />
    </div>

    <div className="mt-7 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <RiArrowUpSLine className="h-6 w-6 shrink-0" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="h-16" />

    <h2 className="flex items-center gap-2 font-primary-bold text-xl">
      <RiArrowUpSLine className="h-6 w-6" />
      Add New Design
    </h2>

    <div className="mt-8 flex flex-col gap-6">
      {fields.map(({ label, placeholder }) => (
        <label key={label} className="flex flex-col gap-3">
          <span className="flex items-center gap-4 text-base text-[var(--DarkNeutral800)]">
            {label}
            <IoInformationCircleOutline className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder={placeholder}
            className="h-14 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 font-primary-light text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
          />
        </label>
      ))}
    </div>

    <div className="mt-8 flex gap-6">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="h-14 flex-1 rounded bg-[var(--Orange800)] font-primary text-base text-[var(--DarkNeutral1000)] hover:bg-[var(--Orange700)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[var(--DarkNeutral700)]">
      Recent Breakdowns
    </h2>
  </div>
);

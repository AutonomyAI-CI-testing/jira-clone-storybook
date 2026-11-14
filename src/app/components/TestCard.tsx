import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

const fieldId = (label: string): string =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button type="button" aria-label="Settings" className="text-icon">
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 font-primary-light text-font-subtle">
      <IoChevronUpOutline size={16} />
      <span className="truncate">From entire frame to a single element</span>
    </div>

    <div className="mt-24 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <IoChevronUpOutline size={16} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      {FIELDS.map(({ label, placeholder }) => (
        <div key={label} className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <label
              htmlFor={fieldId(label)}
              className="font-primary-bold text-sm"
            >
              {label}
            </label>
            <IoInformationCircleOutline size={16} className="text-icon-subtle" />
          </div>
          <input
            id={fieldId(label)}
            name={fieldId(label)}
            placeholder={placeholder}
            className="w-full rounded-none border border-border-input bg-background-input px-5 py-6 font-primary-light text-base text-font outline-2 placeholder:text-font-subtle focus-visible:bg-background-input-pressed"
          />
        </div>
      ))}

      <div className="flex gap-8">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="w-[170px] rounded-lg bg-[color:var(--Orange800)] px-8 py-6 text-base text-font hover:bg-[color:var(--Orange700)] active:bg-[color:var(--Orange900)]"
          >
            {action}
          </button>
        ))}
      </div>
    </div>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

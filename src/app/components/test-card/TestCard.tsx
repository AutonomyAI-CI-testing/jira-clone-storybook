import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-12 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <IoSettingsOutline size={24} />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <IoChevronUpOutline size={20} className="shrink-0" />
      <span className="min-w-0 truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUpOutline size={24} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      {FIELDS.map((field) => (
        <div key={field.label} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-base">{field.label}</span>
            <IoInformationCircleOutline size={20} className="shrink-0" />
          </div>
          <input
            type="text"
            placeholder={field.placeholder}
            className="rounded border border-border-bold bg-elevation-surface-raised px-5 py-6 text-base placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-8 flex gap-8">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded-md bg-[var(--Orange800)] px-8 py-5 text-base text-font"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

import {
  IoChevronUpOutline,
  IoCogOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl">UI magician Agent</span>
      <IoCogOutline size={28} aria-label="Settings" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <IoChevronUpOutline size={22} className="shrink-0" />
      <span className="min-w-0 flex-1 truncate text-xl">
        From entire frame to a single component breakdown
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <IoChevronUpOutline size={22} />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map(({ label, placeholder }) => (
        <div key={label} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xl">{label}</span>
            <IoInformationCircleOutline
              size={22}
              aria-label={`More information about ${label}`}
            />
          </div>
          <input
            placeholder={placeholder}
            className="w-full rounded border border-border-bold bg-background-input px-9 py-6 text-xl text-font placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-end gap-8">
      {ACTIONS.map((label) => (
        <button
          key={label}
          type="button"
          className="w-[170px] rounded-lg bg-[var(--Orange800)] py-5 text-center text-xl text-font-subtle"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-16 font-primary-bold text-2xl text-font-subtle">
      Recent Breakdowns
    </div>
  </div>
);

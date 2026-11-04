import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

const INPUT_CLASS =
  "rounded-md border border-border-bold bg-background-input px-4 py-3 font-primary-light text-font placeholder:text-font-subtlest";

const ACTION_CLASS =
  "min-w-[160px] rounded bg-[var(--Orange800)] px-6 py-3 font-primary-bold text-font hover:bg-[var(--Orange700)]";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * The frame is a dark surface, so the `dark` theme class is pinned on the root:
 * this card is meant to look the same in every app theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[508px] flex-col bg-elevation-surface px-6 py-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog size={24} className="text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-sm text-font-subtle">
      <HiChevronUp size={18} />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-12 flex flex-col gap-6">
      <div className="flex items-center gap-2 font-primary-bold text-2xl">
        <HiChevronUp size={22} />
        <span>Add New Design</span>
      </div>

      {FIELDS.map(({ label, placeholder }) => (
        <div key={label} className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-font-subtle">
            <span>{label}</span>
            <HiOutlineInformationCircle size={16} />
          </div>
          <input readOnly className={INPUT_CLASS} placeholder={placeholder} />
        </div>
      ))}

      <div className="flex gap-6">
        {ACTIONS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASS}>
            {label}
          </button>
        ))}
      </div>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

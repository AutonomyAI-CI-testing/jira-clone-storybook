import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

/**
 * A self-contained reproduction of the "UI magician Agent" design frame.
 * Takes no props — every value is fixed — and the root element carries the
 * `testElem` id used to target it.
 */
export const TestCard = () => {
  const inputClass =
    "mt-3 h-16 w-full rounded-[3px] border-2 border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-5 text-lg text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]";

  const buttonClass =
    "rounded-[5px] bg-[var(--Orange800)] px-10 py-5 text-lg text-[var(--Orange200)]";

  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <MdSettings
          size={32}
          aria-hidden
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral600)]">
        <MdExpandLess size={26} aria-hidden className="shrink-0" />
        <span className="truncate text-lg">From entire frame to a singl...</span>
      </div>

      <div className="h-28" />

      <div className="flex items-center gap-3">
        <MdExpandLess size={28} aria-hidden className="shrink-0" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-5">
        {FIELDS.map(({ label, placeholder }) => (
          <label key={label} className="block">
            <span className="flex items-center gap-3 text-lg">
              {label}
              <MdInfoOutline size={26} aria-hidden className="shrink-0" />
            </span>
            <input
              type="text"
              placeholder={placeholder}
              className={inputClass}
            />
          </label>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-8">
        {ACTIONS.map((action) => (
          <button key={action} type="button" className={buttonClass}>
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

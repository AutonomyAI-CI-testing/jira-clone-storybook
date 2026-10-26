import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTION_BUTTON =
  "h-[72px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[var(--DarkNeutral1100)]";

/**
 * A self-contained, presentational panel reproduced from the "UI magician Agent"
 * Figma frame. It takes no props and reads no app data.
 *
 * The panel is deliberately fixed-dark, so it uses the palette's dark-neutral
 * primitives instead of the theme-aware semantic layer.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[var(--DarkNeutral100)] p-10 font-primary-light text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-[var(--DarkNeutral900)] hover:bg-[var(--DarkNeutral300)]"
      >
        <MdSettings size={24} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <RiArrowUpSLine size={24} className="shrink-0" aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-10 flex items-center gap-2 font-primary-bold text-2xl">
      <RiArrowUpSLine size={28} className="shrink-0" aria-hidden="true" />
      Add New Design
    </h2>

    <div className="mt-6 flex flex-col gap-5">
      {FIELDS.map(({ id, label, placeholder }) => (
        <div key={id}>
          <div className="flex items-center gap-2">
            <label htmlFor={id} className="text-lg">
              {label}
            </label>
            <RiInformationLine
              size={22}
              className="shrink-0 text-[var(--DarkNeutral700)]"
              aria-hidden="true"
            />
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className="mt-3 h-16 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral300)] px-5 text-base placeholder:text-[var(--DarkNeutral700)]"
          />
        </div>
      ))}
    </div>

    <div className="mt-8 flex gap-9 pl-12">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-10 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

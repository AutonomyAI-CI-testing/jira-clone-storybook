import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Smoke test only: self-contained, no props, no state, no data.
 *
 * The panel is pinned dark, so every colour inside it is a raw palette value
 * rather than a semantic role — a theme role such as `text-font` resolves to
 * dark navy under the light theme and would disappear on this surface.
 */

const HEADING = "font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]";
const COPY = "text-[15px] text-[color:var(--DarkNeutral800)]";
const GLYPH = "shrink-0 text-[color:var(--DarkNeutral800)]";
const INPUT =
  "mt-3 h-12 w-full rounded border border-border-bold bg-[var(--DarkNeutral250)] px-4 text-[15px] text-[color:var(--DarkNeutral800)]";
const BUTTON =
  "h-20 w-[170px] rounded-md bg-[var(--Orange800)] text-[17px] text-white";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    value: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    value: "https://www.figma.com/file/",
  },
];

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary">
    <div className="flex items-start justify-between">
      <h2 className={HEADING}>UI magician Agent</h2>
      <FiSettings aria-hidden="true" className="h-6 w-6 shrink-0 text-[color:var(--DarkNeutral800)]" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className={`h-5 w-5 ${GLYPH}`} />
      <span className={`min-w-0 flex-1 truncate ${COPY}`}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className={`h-6 w-6 ${GLYPH}`} />
      <h3 className={HEADING}>Add New Design</h3>
    </div>

    {FIELDS.map((field) => (
      <div key={field.id} className="mt-10">
        <div className="flex items-center gap-3">
          <label htmlFor={field.id} className={COPY}>
            {field.label}
          </label>
          <FiInfo aria-hidden="true" className={`h-4 w-4 ${GLYPH}`} />
        </div>
        <input
          id={field.id}
          type="text"
          readOnly
          defaultValue={field.value}
          className={INPUT}
        />
      </div>
    ))}

    <div className="mt-10 flex gap-10 pl-12">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <h3 className={`mt-24 ${HEADING}`}>Recent Breakdowns</h3>
  </div>
);

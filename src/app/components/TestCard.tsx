import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a smoke-test rendering of the attached Figma frame.
 *
 * It exists only to confirm the design renders on screen in this app: it takes
 * no props and is not wired into any route.
 *
 * The design's extracted style guide was not available when this was written,
 * so the type sizes, the paddings, the dark surface and the rust button fill are
 * read off the image and are approximate — they are not the design's real values.
 */

const FIELD_CLASS =
  "mt-3 h-14 w-full rounded border border-border-bold bg-background-input px-4 text-base text-font-subtle placeholder:text-font-subtle";

const ACTION_CLASS =
  "h-14 flex-1 rounded-lg bg-[var(--Orange800)] text-lg text-[color:var(--Orange200)]";

const FIELDS = [
  {
    id: "test-card-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-11 py-11 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" className="h-6 w-6 shrink-0" />
    </div>

    <div className="mt-9 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    {FIELDS.map((field) => (
      <div key={field.id} className="mt-12">
        <div className="flex items-center gap-2">
          <label htmlFor={field.id} className="text-base">
            {field.label}
          </label>
          <FiInfo
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-font-subtle"
          />
        </div>
        <input
          id={field.id}
          readOnly
          placeholder={field.placeholder}
          className={FIELD_CLASS}
        />
      </div>
    ))}

    <div className="mt-12 flex gap-9">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_CLASS}>
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-28 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);

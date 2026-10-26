import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    hint: "Where to find your personal access token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    hint: "Where to find the design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTION_BUTTON_CLASSES =
  "flex-1 rounded bg-background-brand-bold px-2 py-2 font-primary text-2xs text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface-sunken p-5 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary text-xs">UI magician Agent</h2>
      <span
        role="img"
        aria-label="Settings"
        className="shrink-0 text-icon-subtle"
      >
        <FiSettings size={16} aria-hidden="true" />
      </span>
    </div>

    <div className="mt-2 flex items-center gap-2">
      <FiChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
      <span className="truncate font-primary-light text-2xs text-font-subtlest">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
      <h3 className="font-primary text-xs">Add New Design</h3>
    </div>

    {FIELDS.map(({ id, label, hint, placeholder }) => (
      <div key={id} className="mt-4">
        <div className="flex items-center justify-between">
          <label htmlFor={id} className="font-primary text-2xs text-font-subtle">
            {label}
          </label>
          <span
            role="img"
            aria-label={hint}
            className="shrink-0 text-icon-subtle"
          >
            <FiInfo size={15} aria-hidden="true" />
          </span>
        </div>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="mt-2 w-full rounded bg-background-input px-3 py-2 font-primary-light text-2xs text-font outline outline-1 outline-border-input placeholder:text-font-subtlest"
        />
      </div>
    ))}

    <div className="mt-4 flex gap-3">
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h3 className="mt-6 font-primary text-xs">Recent Breakdowns</h3>
  </div>
);

import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Self-contained, prop-less reproduction of the "UI magician Agent" panel from
 * the Figma design. It is a static smoke test — there is no state, no handler
 * and no data behind it.
 *
 * The design's dark surfaces and rust accent have no semantic token in this
 * design system, so the colours bind to the declared palette variables instead
 * of raw hex values.
 */
const PANEL_CLASS =
  "w-[508px] max-w-full bg-[var(--DarkNeutral0)] px-6 py-8 font-primary text-[var(--DarkNeutral800)]";

const HEADING_CLASS = "font-primary-bold text-[var(--DarkNeutral1000)]";

const INPUT_CLASS =
  "mt-4 h-14 w-full rounded-md border-2 border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-5 font-primary text-base text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral700)]";

const BUTTON_CLASS =
  "h-14 flex-1 rounded-lg bg-[var(--Orange800)] font-primary text-base text-[var(--DarkNeutral1000)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
  infoLabel,
}: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <button
        type="button"
        aria-label={infoLabel}
        className="flex items-center text-[var(--DarkNeutral800)]"
      >
        <IoInformationCircleOutline aria-hidden="true" size={18} />
      </button>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  infoLabel: string;
}

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between">
      <h1 className={`text-2xl ${HEADING_CLASS}`}>UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center text-[var(--DarkNeutral1000)]"
      >
        <IoSettingsOutline aria-hidden="true" size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUp
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
      <span className="truncate font-primary-light text-base text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <IoChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h2 className={`text-xl ${HEADING_CLASS}`}>Add New Design</h2>
    </div>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      infoLabel="More information about the personal access token"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      infoLabel="More information about the design URL"
    />

    <div className="mt-12 flex gap-5">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h2 className={`mt-20 text-2xl ${HEADING_CLASS}`}>Recent Breakdowns</h2>
  </div>
);

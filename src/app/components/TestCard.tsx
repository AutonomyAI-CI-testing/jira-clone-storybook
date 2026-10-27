import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A standalone reproduction of the "UI magician Agent" panel from a Figma frame.
 *
 * Deliberately prop-less and self-contained: it is a smoke test of the
 * design-to-component flow rather than a reusable part of the app, so it carries
 * the frame's own dark palette (raw ramp values declared in
 * `src/app/styles/app.css`) instead of the semantic theme tokens.
 */

const BUTTON_STYLE =
  "rounded bg-[var(--Orange800)] px-7 py-3 font-primary text-base text-[var(--Orange200)]";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <label className="flex items-center gap-3 text-base" htmlFor={id}>
      {label}
      <FiInfo className="h-4 w-4 shrink-0" aria-hidden="true" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-11 w-full border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-4 text-base placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[360px] bg-[var(--DarkNeutral0)] p-5 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <FiSettings className="h-5 w-5 shrink-0" aria-hidden="true" />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <h3 className="font-primary-bold text-lg">Add New Design</h3>
    </div>

    <Field
      id="testcard-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testcard-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-8 flex justify-center gap-5">
      <button type="button" className={BUTTON_STYLE}>
        Awesome
      </button>
      <button type="button" className={BUTTON_STYLE}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 text-lg text-[var(--DarkNeutral700)]">Recent Breakdowns</h3>
  </div>
);

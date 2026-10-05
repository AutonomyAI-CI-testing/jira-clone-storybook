import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "rounded bg-[var(--Orange800)] px-6 py-2.5 text-sm text-white transition-colors hover:bg-[var(--Orange700)]";

const INPUT_CLASS =
  "w-full rounded border border-bold bg-elevation-surface-raised px-3 py-2.5 text-sm placeholder:text-font-subtlest";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary-bold text-sm"
    >
      {label}
      <FiInfo size={16} aria-hidden className="text-icon-subtle" />
    </label>
    <input id={id} type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Static reproduction of a Figma frame — a smoke test of the design-to-component
 * pipeline, kept self-contained on purpose: no props, no state, no behaviour.
 *
 * The `dark` class sits on the root so the semantic colour tokens resolve to
 * their dark-theme values, which is the palette the frame uses.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[420px] flex-col gap-5 rounded-lg bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-icon hover:text-icon-brand"
      >
        <FiSettings size={20} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={16} aria-hidden />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={18} aria-hidden />
      <h2 className="font-primary-bold text-lg">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="flex gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-4 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

export default TestCard;

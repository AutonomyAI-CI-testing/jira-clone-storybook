import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from a Figma
 * frame. It takes no props and is wired to nothing: the inputs are inert markup
 * and neither section actually collapses. Render it under the `dark` theme so
 * the panel reads like the frame.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-font-subtle outline outline-2 outline-transparent hover:outline-border-brand"
      >
        <FiSettings size={24} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-16 flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <span className="truncate text-lg">From entire frame to a singl…</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp
        size={20}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
      <h3 className="font-primary-black text-xl">Add New Design</h3>
    </div>

    <div className="mt-12">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-6">
      <button type="button" className={ACTION_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <>
    <label
      htmlFor={id}
      className="flex items-center gap-3 text-base text-font-subtle"
    >
      {label}
      <FiInfo size={18} aria-hidden="true" />
    </label>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 w-full rounded-md border border-border-bold bg-elevation-surface-overlay px-4 py-5 text-base text-font placeholder:text-font-subtlest"
    />
  </>
);

const ACTION_CLASS =
  "w-[170px] rounded-md bg-[var(--Orange800)] py-6 text-lg text-font-subtle hover:bg-[var(--Orange700)]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

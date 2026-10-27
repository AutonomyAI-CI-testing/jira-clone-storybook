import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const ACTION_LABELS = ["Awesome", "Prepare"];

/**
 * A self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * This is a smoke test for the design-to-preview path, so it takes no props and
 * is deliberately not wired into the app. Colours come from the palette ramps
 * declared in `src/app/styles/app.css` rather than from the theme-reactive
 * semantic layer: the card reproduces a fixed dark panel from an external
 * design, so it must not re-colour itself when the app theme changes.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[var(--DarkNeutral-100)] px-4 pb-10 pt-5 font-primary text-[var(--Neutral200)]"
  >
    <header className="flex items-center justify-between gap-4">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 text-[var(--Neutral200)] hover:bg-[var(--DarkNeutral250)]"
      >
        <HiOutlineCog aria-hidden="true" size={24} />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-2 text-[var(--Neutral500)]">
      <HiOutlineChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <section className="mt-24">
      <div className="flex items-center gap-2">
        <HiOutlineChevronUp
          aria-hidden="true"
          size={20}
          className="shrink-0"
        />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-8">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-14 flex-1 rounded bg-[var(--Orange800)] text-lg text-[var(--Neutral300)] transition-colors hover:bg-[var(--Orange700)]"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[var(--Neutral500)]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="h-14 w-full rounded border border-[var(--DarkNeutral250)] bg-[var(--DarkNeutral100)] px-4 text-sm outline-none placeholder:text-[var(--Neutral500)]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

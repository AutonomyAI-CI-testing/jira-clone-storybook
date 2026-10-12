import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static, self-contained render of the "UI magician
 * Agent" panel from the attached Figma frame. Presentational only — no props,
 * no state, no handlers. Visual values are approximate by design.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-16 pt-10 font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <FiSettings
          aria-hidden
          className="mt-0.5 shrink-0 text-[var(--DarkNeutral1000)]"
          size={30}
        />
      </div>

      <div className="mt-16 flex items-center gap-4">
        <FiChevronUp
          aria-hidden
          className="shrink-0 text-[var(--DarkNeutral1000)]"
          size={20}
        />
        <p className="truncate text-lg text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-32 flex items-center gap-4">
        <FiChevronUp
          aria-hidden
          className="shrink-0 text-[var(--DarkNeutral1000)]"
          size={24}
        />
        <h3 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
          Add New Design
        </h3>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-12 flex gap-9">
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] py-5 text-xl text-[var(--DarkNeutral1100)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] py-5 text-xl text-[var(--DarkNeutral1100)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-20 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="mt-10 block">
    <span className="flex items-center gap-3 text-xl text-[var(--DarkNeutral1000)]">
      {label}
      <FiInfo aria-hidden className="shrink-0" size={22} />
    </span>
    <input
      readOnly
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full border-2 border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-5 py-4 text-lg text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

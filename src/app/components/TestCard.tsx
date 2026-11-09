import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3 text-sm">
      {label}
      <FiInfo size={16} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-[color:var(--DarkNeutral500)] bg-[var(--DarkNeutral100)] px-4 py-3 text-sm text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col gap-6 bg-[var(--DarkNeutral-100)] px-5 py-6 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <FiSettings size={20} />
    </div>

    <div className="flex items-center gap-3">
      <FiChevronUp size={16} />
      <span className="min-w-0 truncate text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <FiChevronUp size={20} />
        <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-5 px-6">
        <button
          type="button"
          className="flex-1 bg-[var(--Orange700)] py-3 font-primary-bold text-base text-[color:var(--DarkNeutral1100)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[var(--Orange700)] py-3 font-primary-bold text-base text-[color:var(--DarkNeutral1100)]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

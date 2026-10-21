import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTONS = ["Awesome", "Prepare"];

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-sm text-[var(--DarkNeutral1100)]">
        {label}
      </span>
      <FiInfo size={16} className="text-[var(--DarkNeutral1100)]" aria-hidden />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-3 py-2.5 font-primary-light text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col gap-5 rounded-md bg-[var(--DarkNeutral100)] p-6 text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <FiSettings size={22} aria-hidden />
    </div>

    <div className="flex items-center gap-3">
      <FiChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="min-w-0 flex-1 truncate font-primary-light text-sm text-[var(--DarkNeutral700)]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp size={22} className="shrink-0" aria-hidden />
      <h3 className="font-primary-black text-lg">Add New Design</h3>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="flex gap-4">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 cursor-pointer rounded-md bg-[var(--Orange800)] px-4 py-3 font-primary text-sm text-[var(--DarkNeutral1100)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-10 font-primary-black text-lg">Recent Breakdowns</h3>
  </div>
);

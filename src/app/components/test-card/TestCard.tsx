import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <label className="text-lg" htmlFor={id}>
        {label}
      </label>
      <FiInfo aria-hidden="true" size={22} />
    </div>
    <input
      className="mt-4 h-[54px] w-full border border-[color:var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-5 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral600)]"
      id={id}
      placeholder={placeholder}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    className="w-[508px] bg-[var(--DarkNeutral100)] px-9 py-7 text-[color:var(--DarkNeutral1000)]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-xl">UI magician Agent</span>
      <FiSettings aria-hidden="true" size={22} />
    </div>

    <div className="mt-7 flex items-center gap-4">
      <FiChevronUp aria-hidden="true" size={22} />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-4">
      <FiChevronUp aria-hidden="true" size={24} />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-10">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-5">
      {BUTTON_LABELS.map((label) => (
        <button
          className="rounded-lg bg-[var(--Orange800)] px-9 py-4 text-lg text-[color:var(--DarkNeutral1100)]"
          key={label}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-24">
      <span className="font-primary-bold text-2xl">Recent Breakdowns</span>
    </div>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

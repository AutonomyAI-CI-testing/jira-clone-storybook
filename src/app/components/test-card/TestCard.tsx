import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const actionButton =
  "w-[170px] rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-lg text-[var(--DarkNeutral1100)]";

const input =
  "mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 py-4 text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-[var(--DarkNeutral1000)]"
      >
        <FiSettings aria-hidden size={26} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp aria-hidden size={22} />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp aria-hidden size={26} />
      <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-8"
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-6"
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex gap-8">
      <button type="button" className={actionButton}>
        Awesome
      </button>
      <button type="button" className={actionButton}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ className, id, label, placeholder }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-base">
        {label}
      </label>
      <FiInfo aria-hidden size={20} />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={input} />
  </div>
);

interface FieldProps {
  className: string;
  id: string;
  label: string;
  placeholder: string;
}

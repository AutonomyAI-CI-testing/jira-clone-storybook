import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-6">
      <span className="text-sm text-[color:var(--DarkNeutral900)]">
        {label}
      </span>
      <FaInfoCircle size={18} className="shrink-0" />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 py-4 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)] focus:outline-none"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="text-lg text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center rounded-full p-1 hover:text-[color:var(--DarkNeutral1100)]"
      >
        <FaCog size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FaChevronUp size={14} className="shrink-0" />
      <span className="truncate text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FaChevronUp size={16} className="shrink-0" />
      <span className="text-lg text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </span>
    </div>

    <div className="mt-20 space-y-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-12 flex gap-8">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 cursor-pointer rounded bg-[var(--Orange800)] px-6 py-4 text-base text-[color:var(--DarkNeutral900)]"
        >
          {action}
        </button>
      ))}
    </div>

    <div className="mt-24 text-lg text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </div>
  </div>
);

import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[17px] text-[var(--Neutral300)]">
        {label}
      </label>
      <FiInfo
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[var(--Neutral400)]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[var(--Neutral500)] bg-[var(--DarkNeutral100)] px-4 py-3 text-[16px] text-[var(--Neutral300)] placeholder:text-[var(--Neutral600)]"
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] text-[var(--Neutral300)]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden="true"
        size={26}
        className="mt-1 shrink-0 text-[var(--Neutral400)]"
      />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[17px] text-[var(--Neutral500)]">
      <FiChevronUp aria-hidden="true" size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={24}
        className="shrink-0 text-[var(--Neutral300)]"
      />
      <h2 className="font-primary-bold text-[23px] text-[var(--Neutral300)]">
        Add New Design
      </h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-8">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded bg-[var(--Orange800)] px-12 py-5 text-[17px] text-[var(--Neutral300)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[21px] text-[var(--Neutral300)]">
      Recent Breakdowns
    </h2>
  </div>
);

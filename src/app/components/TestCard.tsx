import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-4 h-[68px] w-full rounded-sm border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-6 font-primary-light text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--Neutral500)]";

const actionButtonClass =
  "rounded-lg bg-[var(--Orange800)] px-10 py-5 font-primary-bold text-lg text-[var(--DarkNeutral1100)]";

const Field = ({ id, label, placeholder, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="font-primary-bold text-base">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={20} />
    </div>
    <input id={id} placeholder={placeholder} className={fieldClass} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-12 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings aria-hidden="true" size={24} />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={16} />
      <span className="truncate font-primary-light text-base text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-20 flex items-center gap-2 font-primary-bold text-xl">
      <FiChevronUp aria-hidden="true" size={20} />
      Add New Design
    </h2>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-10"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-6"
    />

    <div className="mt-12 flex gap-10">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

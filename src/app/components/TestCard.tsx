import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const actionButtonClassName =
  "h-[50px] w-[170px] rounded bg-[var(--Orange700)] font-primary text-base text-[color:var(--DarkNeutral1000)]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary text-base text-[color:var(--DarkNeutral700)]"
      >
        {label}
      </label>
      <FiInfo
        size={18}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[50px] w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-4 font-primary text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-8"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <FiSettings
        size={22}
        aria-hidden="true"
        className="text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <FiChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <span className="truncate font-primary-light">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp
        size={20}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-6">
      <Field
        id="testcard-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-7">
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-7 flex gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={actionButtonClassName}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

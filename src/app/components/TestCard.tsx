import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASS =
  "mt-4 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 py-4 text-sm outline-none placeholder:text-[var(--DarkNeutral600)]";

const ACTION_BUTTON_CLASS =
  "h-[70px] w-[170px] rounded bg-[var(--Orange700)] text-lg text-[var(--DarkNeutral800)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-9 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden="true"
        size={24}
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
      <span className="truncate text-base text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[130px] flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
      <h2 className="font-primary-black text-xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-12 flex flex-col gap-8">
      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-28 font-primary-black text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={18} className="shrink-0" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

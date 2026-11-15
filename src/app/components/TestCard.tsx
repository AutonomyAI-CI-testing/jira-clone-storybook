import {
  HiChevronUp,
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const actionButtonClass =
  "w-[170px] rounded-md bg-[var(--Orange700)] px-4 py-4 font-primary-bold text-lg text-[var(--DarkNeutral800)]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-9">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-lg text-[var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <HiOutlineInformationCircle
        size={20}
        aria-hidden
        className="text-[var(--DarkNeutral700)]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-4 py-4 font-primary-light text-lg text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-9 py-10 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-7 w-7 items-center justify-center rounded text-[var(--DarkNeutral1100)]"
      >
        <HiOutlineCog size={24} aria-hidden />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <HiOutlineChevronUp size={20} aria-hidden className="shrink-0" />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <HiChevronUp
        size={24}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
      <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      id="testcard-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testcard-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex justify-center gap-9">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

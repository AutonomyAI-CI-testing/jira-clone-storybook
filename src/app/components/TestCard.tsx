import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSES =
  "mt-8 h-[70px] w-full rounded-md border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-8 text-lg text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral800)]";

const BUTTON_CLASSES =
  "h-[70px] w-[168px] rounded-md bg-[#A63E1E] text-lg text-[var(--DarkNeutral800)]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <FiInfo aria-hidden className="h-5 w-5 text-[var(--DarkNeutral800)]" />
    </div>
    <input id={id} placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[var(--DarkNeutral100)] px-10 py-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-2xl">UI magician Agent</h1>
      <FiSettings
        aria-hidden
        className="h-7 w-7 text-[var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        aria-hidden
        className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]"
      />
      <p className="truncate text-lg text-[var(--DarkNeutral800)]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp
        aria-hidden
        className="h-6 w-6 shrink-0 text-[var(--DarkNeutral800)]"
      />
      <h2 className="text-xl">Add New Design</h2>
    </div>

    <div className="mt-16 space-y-8">
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
    </div>

    <div className="mt-12 flex justify-end gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 text-xl text-[var(--DarkNeutral800)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

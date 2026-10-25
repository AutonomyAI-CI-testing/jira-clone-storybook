import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTIONS = ["Awesome", "Prepare"] as const;

const TestCardField = ({
  id,
  label,
  placeholder,
  inputHeightClass,
}: TestCardFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="font-primary-light text-lg text-[var(--DarkNeutral900)]"
      >
        {label}
      </label>
      <FiInfo aria-hidden="true" className="h-4 w-4 text-[var(--DarkNeutral800)]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={`w-full rounded-md border border-[var(--DarkNeutral350)] bg-[var(--DarkNeutral200)] px-4 font-primary-light text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)] ${inputHeightClass}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral800)]"
      >
        <FiSettings aria-hidden="true" className="h-[22px] w-[22px]" />
      </button>
    </div>

    <div className="flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h3 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h3>
    </div>

    <TestCardField
      id="testElemAccessToken"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxxx"
      inputHeightClass="h-20"
    />

    <TestCardField
      id="testElemDesignUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputHeightClass="h-16"
    />

    <div className="flex gap-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] py-3 font-primary text-lg text-[var(--DarkNeutral1100)] transition-colors duration-100 hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-6 font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputHeightClass: string;
}

import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const PANEL_ACTIONS = ["Awesome", "Prepare"];

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-4 flex items-center gap-3">
      <span className="text-base text-[var(--DarkNeutral800)]">{label}</span>
      <FiInfo
        size={18}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-14 w-full border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-8 text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral500)]"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[50px] w-[172px] rounded-[7px] bg-[#a8451f] font-primary-bold text-lg text-[var(--DarkNeutral800)]"
  >
    {label}
  </button>
);

/**
 * A self-contained approximation of the "UI magician Agent" frame. It takes no
 * props and holds no state: it exists to check that a design frame can be
 * turned into a component and put on screen.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 pt-12 pb-20 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <FiSettings
        size={20}
        aria-hidden
        className="mt-0.5 shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>

    <div className="mt-14 flex items-center gap-3">
      <FiChevronUp
        size={16}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="truncate text-base text-[var(--DarkNeutral700)]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp
        size={20}
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
      <h3 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-12 flex flex-col gap-5">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-16 ml-12 flex gap-8">
      {PANEL_ACTIONS.map((action) => (
        <ActionButton key={action} label={action} />
      ))}
    </div>

    <h3 className="mt-20 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}

export default TestCard;

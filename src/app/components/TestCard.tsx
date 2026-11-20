import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 pt-5 pb-14 text-[var(--DarkNeutral700)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden className="h-4 w-4 shrink-0" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-3 w-3 shrink-0" />
      <span className="truncate text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-3 w-3 shrink-0" />
      <h2 className="font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7 space-y-3">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-5 flex gap-4 pl-6">
      {ACTIONS.map((label) => (
        <button
          key={label}
          type="button"
          className="w-[85px] rounded bg-[var(--Orange800)] py-2.5 text-2xs text-[var(--DarkNeutral800)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

// The Figma frame's palette (#1C1D17 ground, #272822 fields, #843A17 buttons) has no
// semantic token in this repo, and the card has to look the same under every Storybook
// theme, so it reads the ramp variables app.css declares once in :root.
const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-2xs text-[var(--DarkNeutral800)]"
    >
      {label}
      <FiInfo aria-hidden className="h-4 w-4 shrink-0" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 py-2.5 text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTION_LABELS = ["Awesome", "Prepare"];

const INPUT_CLASS =
  "mt-2 w-full rounded border border-border-bold bg-background-input px-3 py-3 text-base text-font placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-10 py-8 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-icon-subtle hover:bg-background-neutral-hovered hover:text-icon"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtlest">
      <FiChevronUp size={18} className="shrink-0" />
      <span className="min-w-0 truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp size={22} className="shrink-0" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <TestField
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <TestField
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-6">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-lg bg-[var(--Orange800)] px-4 py-3 text-base text-font hover:opacity-90"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

const TestField = ({
  id,
  label,
  placeholder,
}: TestFieldProps): JSX.Element => (
  <div className="mt-10">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base text-font-subtle">
        {label}
      </label>
      <FiInfo size={18} className="text-icon-subtle" />
    </div>
    <input id={id} placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

interface TestFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

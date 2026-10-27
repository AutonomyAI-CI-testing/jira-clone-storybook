import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-base">{label}</span>
      <FiInfo aria-hidden className="h-4 w-4 text-icon-subtle" />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-transparent p-3 font-primary-light text-font outline-none placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="rounded bg-[color:var(--Orange800)] px-10 py-3 font-primary text-[color:var(--Orange200)]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg">UI magician Agent</span>
      <FiSettings aria-hidden className="h-5 w-5 text-icon-subtle" />
    </div>

    <div className="mt-10 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-5 w-5" />
      <span className="font-primary-bold text-lg">Add New Design</span>
    </div>

    <div className="mt-8">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
    </div>

    <div className="mt-5">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-8 flex gap-5">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <div className="mt-16">
      <span className="font-primary-bold text-lg">Recent Breakdowns</span>
    </div>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}

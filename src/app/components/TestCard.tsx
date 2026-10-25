import { FiInfo, FiSettings } from "react-icons/fi";
import cx from "classix";

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("h-5 w-5 shrink-0", className)}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <span className="font-primary-light text-sm text-font-subtle">
        {label}
      </span>
      <FiInfo className="h-4 w-4 shrink-0 text-font-subtle" />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="h-12 w-full rounded border border-border-bold bg-background-input px-4 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="h-12 flex-1 rounded bg-background-brand-bold font-primary text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-sunken px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings className="h-6 w-6 shrink-0 text-font-subtle" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <ChevronUp className="h-4 w-4" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-14 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <ChevronUp />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4 pt-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    <h2 className="mt-14 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

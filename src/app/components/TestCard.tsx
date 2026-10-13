import { ReactNode } from "react";

const GEAR_PATH =
  "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z";

const ACTION_LABELS = ["Awesome", "Prepare"];

const ACTION_CLASSES =
  "w-[170px] rounded-lg bg-[var(--Orange800)] py-5 font-primary text-lg text-[var(--DarkNeutral800)]";

const IconBase = ({ size = 24, className = "", children }: IconBaseProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d={GEAR_PATH} />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);

const InfoIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </IconBase>
);

const ChevronUpIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m18 15-6-6-6 6" />
  </IconBase>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary text-base text-[var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <InfoIcon
        size={22}
        className="shrink-0 text-[var(--DarkNeutral800)]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-8 w-full rounded border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-10 py-5 font-primary text-base text-[var(--DarkNeutral700)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral0)] px-9 pb-9 pt-9 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[var(--DarkNeutral800)]"
      >
        <GearIcon size={28} />
      </button>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon
        size={22}
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
      <span className="min-w-0 flex-1 truncate font-primary text-lg text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-44 flex items-center gap-3">
      <ChevronUpIcon
        size={22}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-center gap-8">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

interface IconProps {
  size?: number;
  className?: string;
}

interface IconBaseProps extends IconProps {
  children: ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

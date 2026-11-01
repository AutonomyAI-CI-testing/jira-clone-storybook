import { Button } from "@app/components/button/button";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ChevronUpIcon = (): JSX.Element => (
  <svg {...iconProps} aria-hidden="true" className="shrink-0">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} width={18} height={18} aria-hidden="true" className="shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} width={20} height={20} aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <span className="font-primary-bold text-sm text-font">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="w-full rounded-md border border-border-bold bg-background-input p-3 font-primary text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] rounded-md bg-elevation-surface-raised p-6 text-font"
  >
    <div className="mb-8 flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mb-12 flex items-center gap-2 font-primary-light text-sm text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <h3 className="mb-6 flex items-center gap-2 font-primary-black text-xl">
      <ChevronUpIcon />
      Add New Design
    </h3>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mb-12 flex gap-4">
      <Button type="button" size="lg">
        Awesome
      </Button>
      <Button type="button" size="lg">
        Prepare
      </Button>
    </div>

    <h3 className="flex items-center gap-2 font-primary-black text-xl">
      Recent Breakdowns
    </h3>
  </div>
);

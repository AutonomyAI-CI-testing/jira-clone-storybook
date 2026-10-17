/**
 * TestCard — a self-contained card reproducing the "UI magician Agent" Figma frame.
 * No props, no state: static markup only.
 *
 * The root carries the `dark` class so the app's dark-theme tokens
 * (src/app/styles/app.css) resolve inside this subtree.
 */

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.4" />
    <path
      d="M8 1.6v2M8 12.4v2M1.6 8h2M12.4 8h2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M12.5 3.5l-1.4 1.4M4.9 11.1l-1.4 1.4"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.2v4.2" strokeLinecap="round" />
    <circle cx="8" cy="4.7" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-font-subtle">
        {label}
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-font-subtle" />
    </div>
    <div className="mt-3 flex h-[37px] w-full items-center border border-border-bold bg-elevation-surface-overlay px-2.5">
      <span className="font-primary text-2xs text-font-subtlest">
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface p-5 text-font"
  >
    <div className="flex items-start justify-between gap-2">
      <span className="font-primary-bold text-sm text-font">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-4 shrink-0 text-font-subtle" />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-font-subtle" />
      <span className="font-primary text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-font-subtle" />
      <span className="font-primary-bold text-sm text-font">
        Add New Design
      </span>
    </div>

    <div className="mt-7 space-y-3">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-sm text-font">
      Recent Breakdowns
    </div>
  </div>
);

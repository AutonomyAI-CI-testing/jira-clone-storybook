import type { ReactNode } from "react";

/**
 * A static panel reproduced from the "UI magician Agent" Figma frame.
 *
 * Self-contained: it takes no props and holds no state, and every control in it
 * is presentational. The `dark` theme class is pinned on the root so the panel
 * renders the same in all five themes.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pb-20 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <GearIcon className="h-6 w-6 shrink-0" />
    </div>

    <div className="mt-7 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <span className="font-primary-light text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-10 flex flex-col gap-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h3 className="mt-28 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="text-base text-font-subtle">{label}</span>
      <InfoIcon className="h-5 w-5 shrink-0 text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-[68px] w-full rounded border border-border-bold bg-elevation-surface-raised px-5 text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[76px] w-[170px] rounded-md bg-[var(--Orange800)] text-base text-font-subtle"
  >
    {label}
  </button>
);

const Icon = ({ className, children }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: IconClassNameProps): JSX.Element => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: IconClassNameProps): JSX.Element => (
  <Icon className={className}>
    <polyline points="18 15 12 9 6 15" />
  </Icon>
);

const InfoIcon = ({ className }: IconClassNameProps): JSX.Element => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  label: string;
}

interface IconClassNameProps {
  className?: string;
}

interface IconProps extends IconClassNameProps {
  children: ReactNode;
}

import type { ReactNode } from "react";
import cx from "classix";

/**
 * Self-contained card reproducing the attached Figma frame.
 * No props, no state — static presentational markup only.
 *
 * The root carries the `dark` class so the repo's semantic colour tokens
 * resolve to their dark values for this subtree only; the app's own default
 * theme stays untouched.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[254px] flex-col gap-4 bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xs text-font">UI magician Agent</h1>
      <SettingsIcon className="h-4 w-4 shrink-0 text-font-subtle" />
    </div>

    <div className="flex items-center gap-2">
      <ChevronUpIcon className="h-3 w-3 shrink-0 text-font-subtle" />
      <span className="truncate font-primary text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <ChevronUpIcon className="h-3.5 w-3.5 shrink-0 text-font-subtle" />
      <h2 className="font-primary-bold text-xs text-font">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      boldBorder
    />

    <div className="mt-6 flex items-center gap-4">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder, boldBorder = false }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <span className="font-primary text-2xs text-font-subtle">{label}</span>
      <InfoIcon className="h-3.5 w-3.5 shrink-0 text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "w-full border bg-elevation-surface-raised px-3 py-2 font-primary text-2xs text-font-subtlest placeholder:text-font-subtlest",
        boldBorder ? "border-2 border-border-bold" : "border border-border"
      )}
    />
  </div>
);

const CardButton = ({ children }: CardButtonProps) => (
  <button
    type="button"
    className="rounded bg-[#843a17] px-5 py-2 font-primary text-2xs text-[#8c8078] hover:bg-[#6f3113]"
  >
    {children}
  </button>
);

const SettingsIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <polyline points="6 15 12 9 18 15" />
  </Icon>
);

const InfoIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
);

const Icon = ({ className, children }: IconWrapperProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  boldBorder?: boolean;
}

interface CardButtonProps {
  children: string;
}

interface IconProps {
  className?: string;
}

interface IconWrapperProps extends IconProps {
  children: ReactNode;
}

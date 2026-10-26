/**
 * TestCard — a static reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Smoke-test component: self-contained, takes no props,
 * and has no behaviour. Colours, spacing and type are approximations of the
 * frame, expressed through the app's semantic tokens so the panel re-themes.
 */

import cx from "classix";

const ChevronUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 16v-4.5M12 8h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-xs font-primary-bold text-font-subtle">
        {label}
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 h-9 w-full rounded border border-border-input bg-background-input px-3 text-xs font-primary-bold text-font placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="flex h-9 w-[85px] cursor-pointer items-center justify-center rounded bg-background-brand-bold text-xs font-primary-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface-sunken p-5 font-primary-light"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-sm font-primary-bold text-font">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center text-font-subtle hover:text-font"
      >
        <GearIcon className="h-4 w-3.5" />
      </button>
    </div>

    {/* Collapsed summary */}
    <div className="mt-6 flex items-center gap-2 text-xs font-primary-bold text-font-subtle">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-14 flex items-center gap-2 text-sm font-primary-bold text-font">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <span>Add New Design</span>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-7"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3"
    />

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-12 text-sm font-primary-bold text-font">
      Recent Breakdowns
    </div>
  </div>
);

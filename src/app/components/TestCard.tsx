import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 12 8"
    >
      <path d="M1 6.75 6 1.75l5 5" />
    </svg>
  );
}

function SettingsIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="2.5" />
      <path d="M13.3 10a1.4 1.4 0 0 0 .28 1.54l.05.05a1.7 1.7 0 1 1-2.4 2.4l-.05-.05a1.4 1.4 0 0 0-1.54-.28 1.4 1.4 0 0 0-.85 1.28v.14a1.7 1.7 0 0 1-3.4 0v-.07a1.4 1.4 0 0 0-.92-1.28 1.4 1.4 0 0 0-1.54.28l-.05.05a1.7 1.7 0 1 1-2.4-2.4l.05-.05a1.4 1.4 0 0 0 .28-1.54 1.4 1.4 0 0 0-1.28-.85H.48a1.7 1.7 0 0 1 0-3.4h.07a1.4 1.4 0 0 0 1.28-.92 1.4 1.4 0 0 0-.28-1.54l-.05-.05a1.7 1.7 0 1 1 2.4-2.4l.05.05a1.4 1.4 0 0 0 1.54.28h.07a1.4 1.4 0 0 0 .85-1.28V.48a1.7 1.7 0 0 1 3.4 0v.07a1.4 1.4 0 0 0 .85 1.28 1.4 1.4 0 0 0 1.54-.28l.05-.05a1.7 1.7 0 1 1 2.4 2.4l-.05.05a1.4 1.4 0 0 0-.28 1.54v.07a1.4 1.4 0 0 0 1.28.85h.14a1.7 1.7 0 0 1 0 3.4h-.07a1.4 1.4 0 0 0-1.28.85Z" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="6.75" />
      <path d="M8 7.5v3.5" />
      <path d="M8 4.9v.2" />
    </svg>
  );
}

const inputClassName =
  "mt-3 h-9 w-full rounded border border-border-input bg-background-input px-3 text-2xs text-font placeholder:text-font-subtlest";

const actionClassName =
  "h-[37px] w-[85px] rounded bg-background-brand-bold text-2xs font-primary-bold text-font-inverse transition-colors duration-100 ease-linear hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="text-2xs text-font-subtlest" htmlFor={id}>
          {label}
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-icon-subtle" />
      </div>
      <input
        className={inputClassName}
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <button className={actionClassName} type="button">
      {children}
    </button>
  );
}

/**
 * Static, self-contained card used to smoke-test the component → story → preview
 * pipeline. Reproduces the "UI magician Agent" Figma frame; takes no props and
 * holds no state.
 */
export function TestCard() {
  return (
    <div
      className="w-[254px] rounded-md bg-elevation-surface-raised p-5 font-primary text-font shadow-sm"
      id="testElem"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xs font-primary-bold">UI magician Agent</h2>
        <SettingsIcon className="h-4 w-3.5 shrink-0 text-icon-subtle" />
      </div>

      <div className="mt-8 flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-2.5 shrink-0 text-icon-subtle" />
        <p className="truncate text-2xs text-font-subtle">
          From entire frame to a single component
        </p>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-icon-subtle" />
        <h3 className="text-xs font-primary-bold">Add New Design</h3>
      </div>

      <div className="mt-8 space-y-3">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h3 className="mt-12 text-xs font-primary-bold">Recent Breakdowns</h3>
    </div>
  );
}

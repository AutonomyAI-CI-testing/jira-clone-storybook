import type { ReactNode } from "react";

/**
 * TestCard — smoke-test reproduction of the "UI magician Agent" Figma frame
 * (node 2-2 of "Test Page - Simple (FOR TESTING)").
 *
 * Self-contained on purpose: no props, no data, no interaction. Spacing,
 * colours and typography are deliberate approximations — this exists to prove
 * the design can be dropped in and rendered, not to be pixel-perfect.
 *
 * Colours resolve through the dark-neutral and red variables declared in
 * `src/app/styles/app.css` rather than raw hex, so the panel stays consistent
 * with the rest of the app.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col gap-y-6 bg-[var(--DarkNeutral0)] p-8 font-primary text-base text-[var(--DarkNeutral900)]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    {/* Collapsed summary row */}
    <div className="flex items-center gap-2">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <h2 className="mt-10 flex items-center gap-2 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <InputField
      id="figma-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
    />
    <InputField
      id="figma-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    {/* Actions */}
    <div className="mt-4 flex gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

const InputField = ({
  id,
  label,
  placeholder,
}: InputFieldProps): JSX.Element => (
  <div className="flex flex-col gap-y-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base text-[var(--DarkNeutral800)]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral-100)] px-3 py-4 text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)] outline-none"
    />
  </div>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const ActionButton = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="w-[172px] rounded bg-[var(--Red800)] py-3 text-base text-[var(--DarkNeutral900)]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[var(--DarkNeutral800)]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="shrink-0 text-[var(--DarkNeutral800)]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export default TestCard;

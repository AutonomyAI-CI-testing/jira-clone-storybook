import type { ReactNode } from "react";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained: takes no props and reads nothing from the app.
 * The root element carries the id `testElem`.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-6 bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl text-font">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      <div className="flex items-center gap-2 border-b border-border pb-4 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate text-base">From entire frame to a singl...</span>
      </div>

      <div className="flex flex-col gap-6 pt-4">
        <h2 className="flex items-center gap-2 font-primary-bold text-2xl text-font">
          <ChevronUpIcon />
          Add New Design
        </h2>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex gap-8 pt-2">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      <h2 className="pt-4 font-primary-bold text-2xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3 text-base text-font-subtle">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border-bold bg-elevation-surface-overlay px-4 py-4 text-base text-font placeholder:text-font-subtlest"
    />
  </label>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="w-[170px] rounded-md bg-[var(--Orange800)] py-5 font-primary-bold text-lg text-font"
  >
    {children}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

import cx from "classix";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma
 * frame. Deliberately self-contained — no props, no state, no data — and styled
 * with literal values read off the frame rather than the app's semantic tokens,
 * because the frame's dark-grey/orange palette has no token equivalent.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="mx-auto flex min-h-[1016px] w-[508px] flex-col bg-[#1c1c1c] p-10 font-primary text-[#d4d4d4]"
  >
    <header className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <GearIcon />
    </header>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5" />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="h-[150px]" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 space-y-6">
      <FormField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-10 flex gap-10">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-auto pt-24 font-primary-bold text-2xl">
      Recent Breakdowns
    </h2>
  </div>
);

const FormField = ({ id, label, placeholder }: FormFieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#666666] bg-[#232323] px-4 py-3 text-lg text-[#d4d4d4] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className="rounded-md bg-[#a63e17] px-8 py-3 text-xl text-[#d9d9d9]"
  >
    {children}
  </button>
);

const ICON_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
    {...ICON_PROPS}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={cx("shrink-0", className)}
    {...ICON_PROPS}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    {...ICON_PROPS}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}

interface IconProps {
  className?: string;
}

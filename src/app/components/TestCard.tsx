/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel
 * from the attached Figma frame. Self-contained — no props, no state, no
 * handlers. Layout only.
 */

const Icon = ({ size, children }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <Icon size={20}>
    <path d="m6 15 6-6 6 6" />
  </Icon>
);

const InfoIcon = (): JSX.Element => (
  <Icon size={18}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75h.01" />
  </Icon>
);

const GearIcon = (): JSX.Element => (
  <Icon size={22}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-2 text-[15px] text-[#8c8c8c]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#5a5a5a] bg-[#2b2b2b] px-4 py-5 text-[15px] text-[#e6e6e6] placeholder:text-[#6e6e6e]"
    />
  </label>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[170px] cursor-pointer rounded-md bg-[#a8441a] py-4 font-primary-bold text-lg text-[#c98a5f] hover:bg-[#8f3a16] active:bg-[#7d3213]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-6 py-7 font-primary text-[#8c8c8c]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl text-[#f5f5f5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-[#d0d0d0] hover:bg-[#2b2b2b]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="truncate text-[15px]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="h-32" />

    <div className="flex items-center gap-2">
      <ChevronUpIcon />
      <span className="font-primary-bold text-lg text-[#f5f5f5]">
        Add New Design
      </span>
    </div>

    <div className="mt-9 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-14 flex gap-9">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div className="mt-28">
      <span className="font-primary-bold text-lg text-[#f5f5f5]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

interface IconProps {
  size: number;
  children: React.ReactNode;
}

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}

/**
 * TestCard
 *
 * A static, self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke test of the design-to-code path: no props, no state, no data, no events.
 * Palette values are read from the frame image and are deliberately literal —
 * this panel is not on an app surface and its colours have no semantic token.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-10 pb-24 pt-10"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-[#d0d0d0]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-12 flex items-center gap-4">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-[17px] text-[#b8b8b8]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-40 flex items-center gap-4">
      <ChevronUpIcon size={22} />
      <h2 className="font-primary-black text-[22px] text-[#d0d0d0]">
        Add New Design
      </h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex justify-end gap-8">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-24 font-primary-black text-[22px] text-[#d0d0d0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-12">
    <div className="flex items-center gap-4">
      <span className="font-primary text-[18px] text-[#c8c8c8]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-4 h-[72px] w-full border border-[#6e6e6e] bg-[#262626] px-8 text-[19px] text-[#c8c8c8] placeholder:text-[#6e6e6e]"
    />
  </div>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[72px] w-[170px] rounded-lg bg-[#8e3c1d] font-primary text-[19px] text-[#bda99b]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d0d0d0"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 20 }: ChevronUpIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b8b8b8"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c8c8c8"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  children: string;
}

interface ChevronUpIconProps {
  size?: number;
}

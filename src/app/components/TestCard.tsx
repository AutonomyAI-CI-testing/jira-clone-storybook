/**
 * TestCard — a self-contained panel reproducing the cropped Figma frame
 * ("UI magician Agent" / Add New Design / Recent Breakdowns).
 *
 * Smoke-test component: no props, no state, no data fetching, no imports from
 * other components. Visual values are deliberately approximate.
 *
 * Colours are written as arbitrary values because the repo's `theme.colors` is a
 * full override — no semantic role resolves to this panel's dark palette — and
 * `bg-gray-800`-style stock utilities compile to nothing here.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#0d0d0d] px-10 py-8 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[21px] leading-7 text-[#ededed]">
          UI magician Agent
        </h1>
        <GearIcon className="h-[26px] w-[26px] shrink-0 text-[#e8e8e8]" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#b3b3b3]" />
        <span className="truncate text-[16px] text-[#b3b3b3]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#ededed]" />
        <h2 className="font-primary-bold text-[21px] leading-7 text-[#ededed]">
          Add New Design
        </h2>
      </div>

      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-11 flex gap-9">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-16 font-primary-bold text-[21px] leading-7 text-[#ededed]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mt-7">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[16px] text-[#d5d5d5]">
        {label}
      </label>
      <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#d5d5d5]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[60px] w-full border border-[#8a8a8a] bg-[#1f1f1f] px-5 text-[17px] text-[#d5d5d5] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[72px] w-[168px] rounded bg-[#a8431b] text-[17px] text-[#c19a86]"
  >
    {label}
  </button>
);

const Icon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M18 15l-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

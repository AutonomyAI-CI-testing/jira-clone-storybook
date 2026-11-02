/**
 * TestCard — a static, self-contained rendering of the supplied Figma panel
 * (a dark "UI magician Agent" settings screen).
 *
 * Smoke-test component: no props, no state, no data. Colours are Tailwind
 * arbitrary values read from the design image rather than semantic tokens,
 * because the frame is a dark off-system panel that the app's five themes do
 * not describe. Note that `theme.colors` and `theme.fontFamily` are full
 * overrides in tailwind.config.js, so stock palette classes (bg-gray-800,
 * text-gray-400) and `font-sans` compile to nothing.
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="h-[18px] w-[18px] shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" strokeLinecap="round" />
    <circle cx="12" cy="8.2" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-bold text-[17px] text-[#e6e6e6]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[58px] w-full rounded border border-[#4d4d4d] bg-[#262626] px-4 font-primary text-[16px] text-[#e6e6e6] placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[58px] flex-1 rounded-md bg-[#a34a24] font-primary text-[17px] text-[#ded4cc] hover:bg-[#b3542b]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[520px] bg-[#1e1e1e] px-8 py-8 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[22px] text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <span className="text-[#dfa47a]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[#c9c9c9]">
        <ChevronUpIcon />
        <span className="truncate text-[15px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-28 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[22px] text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <div className="mt-10 space-y-6">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-28 font-primary-bold text-[22px] text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

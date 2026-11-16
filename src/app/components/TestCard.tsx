/**
 * TestCard — a self-contained render of the "UI magician Agent" Figma frame,
 * used to smoke-test the render pipeline. Static markup only: no props, no
 * state, no behaviour, and nothing here is wired into the app or its routes.
 *
 * Colours are arbitrary Tailwind values on purpose. This repo's Tailwind config
 * replaces `theme.colors` outright — only font/link/icon/border/background/
 * elevation/white/black/transparent exist — so the default palette names would
 * generate nothing, and the frame's dark/orange palette has no semantic token.
 */

// Only values used as SVG attributes live here. Everything that lands in a
// Tailwind class has to stay a literal string, because the config's `content`
// scan reads source text and cannot see a JS constant.
const INK = "#c7c7c7";

const GearIcon = (): JSX.Element => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e8e8e8"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Open settings"
    role="img"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 26 }: { size?: number }): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={INK}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke={INK}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" />
    <path d="M12 7.8v0.01" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="flex items-center gap-[26px]">
      <span className="font-primary text-[22px] leading-none text-[#c7c7c7]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-[22px] h-[66px] w-full rounded-[4px] border border-[#8a8a8a] bg-[#2b2b2b] px-[42px] font-primary text-[22px] text-[#9a9a9a] placeholder:text-[#9a9a9a]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-[40px] pt-[48px] pb-[60px] font-primary text-[#c7c7c7]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed row hint */}
      <div className="mt-[32px] flex items-center gap-[14px]">
        <ChevronUpIcon />
        <p className="font-primary text-[22px] leading-none text-[#9a9a9a]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section */}
      <div className="mt-[150px]">
        <div className="flex items-center gap-[12px]">
          <ChevronUpIcon size={30} />
          <h2 className="font-primary text-[30px] leading-none text-[#d5d5d5]">
            Add New Design
          </h2>
        </div>

        <div className="mt-[62px] flex flex-col gap-[30px]">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        </div>

        <div className="mt-[52px] flex gap-[36px] pl-[48px]">
          {ACTION_LABELS.map((label) => (
            <button
              key={label}
              type="button"
              className="h-[72px] w-[169px] rounded-[8px] bg-[#8f3d18] font-primary text-[24px] leading-none text-[#b3a29b] hover:bg-[#7d3514]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <h3 className="mt-[91px] font-primary text-[26px] leading-none text-[#8a8a8a]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

/**
 * Smoke-test component: renders the "UI magician Agent" settings panel from the
 * supplied Figma frame. Self-contained and prop-free by design.
 *
 * The frame's exported icon assets are cropped fragments rather than whole
 * glyphs, so the icons are drawn as inline SVG on a shared grid instead.
 */

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-elevation-surface-sunken px-5 py-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-black text-xs text-font">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon width={8} height={5} />
        <span className="truncate font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUpIcon width={12} height={8} />
        <span className="font-primary-black text-xs text-font-subtle">
          Add New Design
        </span>
      </div>

      <TestCardField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <TestCardField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-5 flex gap-4">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-9 w-[85px] rounded bg-background-warning-bold font-primary-bold text-2xs text-font-inverse hover:bg-background-warning-bold-hovered"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-11 font-primary-black text-xs text-font-subtle">
        Recent Breakdowns
      </p>
    </div>
  );
};

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-font-subtle">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-2 h-9 w-full rounded bg-background-input px-3 font-primary-light text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const ChevronUpIcon = ({ width, height }: IconSizeProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-font-subtle"
    aria-hidden="true"
  >
    <path d="M1.5 6.5 6 1.5l4.5 5" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-font-subtle"
    role="img"
    aria-label="Settings"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-font-subtle"
    role="img"
    aria-label="More information"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}

interface IconSizeProps {
  width: number;
  height: number;
}

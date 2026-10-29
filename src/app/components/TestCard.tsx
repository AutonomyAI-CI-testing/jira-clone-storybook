/**
 * Smoke-test component: renders the "UI magician Agent" settings panel from the
 * supplied Figma frame. Self-contained and prop-free by design.
 *
 * The frame's exported icon assets are unusable here — the gear and info PNGs
 * are cropped fragments rather than whole glyphs — so the four icons are drawn
 * inline on a consistent 16-unit grid.
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
        <ChevronUp className="h-[5px] w-2 text-font-subtlest" />
        <span className="truncate font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUp className="h-2 w-3 text-font-subtle" />
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
            className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#d9d3ce] hover:bg-[#72320f]"
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

const ChevronUp = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1.25 6.5 6 1.75 10.75 6.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 18"
    width={14}
    height={16}
    fill="none"
    aria-hidden="true"
    className="text-font-subtle"
  >
    <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M8 2.6v3M8 12.4v3M1.6 9h3M11.4 9h3M3.47 4.47l2.13 2.13M10.4 11.4l2.13 2.13M12.53 4.47 10.4 6.6M5.6 11.4l-2.13 2.13"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    width={15}
    height={15}
    fill="none"
    aria-hidden="true"
    className="text-font-subtle"
  >
    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 7.3v4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.8" r="0.85" fill="currentColor" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}

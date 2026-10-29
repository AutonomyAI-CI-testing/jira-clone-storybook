/**
 * Smoke-test component: renders the "UI magician Agent" settings panel from the
 * supplied Figma frame. Self-contained and prop-free by design.
 *
 * The icons are drawn inline as vector shapes: the frame's exported icon assets
 * are cropped raster fragments that render as partial arcs at these sizes, so
 * the shapes below reproduce what the frame actually shows.
 */

const ACTION_LABELS = ["Awesome", "Prepare"];

const GearIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    role="img"
    aria-label="Settings"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUp = ({ width, height }: ChevronUpProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    role="img"
    aria-label="More information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.8V11"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.3" r="0.85" fill="currentColor" />
  </svg>
);

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
        <span className="text-icon-subtle">
          <GearIcon />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-icon-subtle">
        <ChevronUp width={8} height={5} />
        <span className="truncate font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-icon-subtle">
        <ChevronUp width={12} height={8} />
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
            className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-white hover:opacity-90"
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
      <span className="text-icon-subtle">
        <InfoIcon />
      </span>
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-2 h-9 w-full rounded bg-background-input px-3 font-primary-light text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}

interface ChevronUpProps {
  width: number;
  height: number;
}

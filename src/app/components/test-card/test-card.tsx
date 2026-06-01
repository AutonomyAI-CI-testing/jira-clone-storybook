import { useState } from "react";

// Info icon component - reusable SVG for form field tooltips
const InfoIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
    <text
      x="6"
      y="7"
      textAnchor="middle"
      fontSize="8"
      fill="currentColor"
      className="font-semibold"
    >
      i
    </text>
  </svg>
);

// Settings icon component - reusable SVG for header button
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <path
      d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
      fill="currentColor"
    />
    <path
      d="M8 2C8.27614 2 8.5 1.77614 8.5 1.5V1C8.5 0.447715 8.05228 0 7.5 0C6.94772 0 6.5 0.447715 6.5 1V1.5C6.5 1.77614 6.72386 2 7 2H8Z"
      fill="currentColor"
    />
    <path
      d="M15 7.5C15.5523 7.5 16 7.94772 16 8.5V9C16 9.55228 15.5523 10 15 10H14.5C14.2239 10 14 9.77614 14 9.5V7.5C14 7.22386 14.2239 7 14.5 7H15Z"
      fill="currentColor"
    />
    <path
      d="M1 8.5C1 7.94772 1.44772 7.5 2 7.5H2.5C2.77614 7.5 3 7.72386 3 8V10C3 10.2761 2.77614 10.5 2.5 10.5H2C1.44772 10.5 1 10.0523 1 9.5V8.5Z"
      fill="currentColor"
    />
    <path
      d="M8 14C8.27614 14 8.5 14.2239 8.5 14.5V15C8.5 15.5523 8.05228 16 7.5 16C6.94772 16 6.5 15.5523 6.5 15V14.5C6.5 14.2239 6.72386 14 7 14H8Z"
      fill="currentColor"
    />
  </svg>
);

// Collapsible section button - extracted to reduce duplicate toggle code
interface CollapsibleSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  label: string;
}

const CollapsibleSection = ({
  isExpanded,
  onToggle,
  label,
}: CollapsibleSectionProps): JSX.Element => (
  <div className="mb-4">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center gap-2 text-left text-xs text-font-subtlest hover:text-font-subtle"
    >
      <span className="text-font-subtlest">{isExpanded ? "▼" : "▶"}</span>
      <span className="line-clamp-1">{label}</span>
    </button>
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div id="testElem" className="w-full bg-black p-5">
      <div className="w-[254px] rounded-lg bg-black p-5 text-font-subtlest">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-semibold text-font-subtle">UI magician Agent</h1>
          <button
            type="button"
            className="text-font-subtlest hover:text-font-subtle"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible frame section */}
        <CollapsibleSection
          isExpanded={isFrameExpanded}
          onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
          label="From entire frame to a singl..."
        />

        {/* Add New Design section */}
        <CollapsibleSection
          isExpanded={isDesignExpanded}
          onToggle={() => setIsDesignExpanded(!isDesignExpanded)}
          label="Add New Design"
        />

        {/* Personal Access Token field */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-1">
            <label className="text-xs font-semibold text-font-subtle">
              Personal Access Token
            </label>
            <button
              type="button"
              className="text-font-disabled hover:text-font-subtlest"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className="w-full border border-border bg-black px-3 py-2 text-xs text-font-subtlest placeholder-font-disabled outline-none"
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-1">
            <label className="text-xs font-semibold text-font-subtle">
              Design URL
            </label>
            <button
              type="button"
              className="text-font-disabled hover:text-font-subtlest"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            type="text"
            placeholder="https://figma.com/file/..."
            className="w-full border border-border bg-black px-3 py-2 text-xs text-font-subtlest placeholder-font-disabled outline-none"
            readOnly
          />
        </div>

        {/* Action buttons */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="bg-background-brand-bold px-4 py-2 text-xs font-semibold text-white hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-background-brand-bold px-4 py-2 text-xs font-semibold text-white hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div className="border-t border-border pt-4">
          <h3 className="text-xs font-semibold text-font-subtlest">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};

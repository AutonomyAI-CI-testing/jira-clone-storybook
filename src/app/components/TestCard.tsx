// Settings icon with radial particle pattern
const SettingsIcon = (): JSX.Element => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle cx="14" cy="14" r="3.5" fill="#8b9291" opacity="0.7" />
    <circle cx="14" cy="3" r="2" fill="#8b9291" opacity="0.7" />
    <circle cx="14" cy="25" r="2" fill="#8b9291" opacity="0.7" />
    <circle cx="3" cy="14" r="2" fill="#8b9291" opacity="0.7" />
    <circle cx="25" cy="14" r="2" fill="#8b9291" opacity="0.7" />
    <circle cx="6.5" cy="6.5" r="1.8" fill="#8b9291" opacity="0.7" />
    <circle cx="21.5" cy="6.5" r="1.8" fill="#8b9291" opacity="0.7" />
    <circle cx="6.5" cy="21.5" r="1.8" fill="#8b9291" opacity="0.7" />
    <circle cx="21.5" cy="21.5" r="1.8" fill="#8b9291" opacity="0.7" />
    <circle cx="9" cy="3.5" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="19" cy="3.5" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="9" cy="24.5" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="19" cy="24.5" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="3.5" cy="9" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="3.5" cy="19" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="24.5" cy="9" r="1.2" fill="#8b9291" opacity="0.6" />
    <circle cx="24.5" cy="19" r="1.2" fill="#8b9291" opacity="0.6" />
  </svg>
);

// Accordion/disclosure chevron pointing up
const ChevronIcon = ({
  fillColor,
  opacity,
}: {
  fillColor: string;
  opacity: string;
}): JSX.Element => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path d="M8 0L16 10H0L8 0z" fill={fillColor} opacity={opacity} />
  </svg>
);

// Info icon for form field labels
const InfoIcon = ({ strokeColor }: { strokeColor: string }): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle cx="10" cy="10" r="9" stroke={strokeColor} />
    <text
      x="10"
      y="14"
      fontSize="12"
      fontWeight="600"
      fill={strokeColor}
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[320px] bg-[#1a1a17] p-5">
      {/* Header with title and settings icon */}
      <div className="mb-9 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsed accordion item with truncated text */}
      <div className="mb-16 flex items-center gap-4">
        <ChevronIcon fillColor="#8b9291" opacity="0.7" />
        <p className="text-sm font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Expanded accordion section for adding new design */}
      <div className="mb-15 mt-18 flex items-center gap-3">
        <ChevronIcon fillColor="#b2b2b1" opacity="0.8" />
        <h3 className="text-lg font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field - Figma API authentication */}
      <div className="mb-12">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="token"
            className="text-sm font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon strokeColor="#a4a4a3" />
        </div>
        <div className="h-16 rounded border border-[#a5adad] bg-[#272822] px-4 py-4">
          <span className="text-sm font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL field - Figma file link */}
      <div className="mb-15">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="url"
            className="text-sm font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon strokeColor="#a3a3a2" />
        </div>
        <div className="h-16 rounded border-2 border-[#929291] bg-[#272822] px-4 py-4">
          <span className="text-sm font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mb-28 flex items-center gap-6">
        <button className="h-[60px] w-[120px] rounded bg-[#843a17] px-6 py-4 text-base font-bold text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[60px] w-[120px] rounded bg-[#843a17] px-6 py-4 text-base font-bold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="text-base font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};

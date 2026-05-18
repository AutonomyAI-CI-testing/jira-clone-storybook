/**
 * InfoIcon component
 * Renders a circular info icon with consistent styling
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="600"
      fill={color}
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

/**
 * ChevronIcon component
 * Renders an upward-pointing chevron with configurable size and color
 */
const ChevronIcon = ({
  width,
  height,
  viewBox,
  pathData,
  color,
}: {
  width: number;
  height: number;
  viewBox: string;
  pathData: string;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d={pathData}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * AtomIcon component
 * Renders a stylized atom icon with nucleus and orbital rings
 */
const AtomIcon = ({ color }: { color: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Agent icon"
  >
    <circle cx="12" cy="12" r="2" fill={color} />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      stroke={color}
      strokeWidth="1"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      stroke={color}
      strokeWidth="1"
      fill="none"
      transform="rotate(-60 12 12)"
    />
  </svg>
);

/**
 * FormField component
 * Reusable input field with label and info icon
 */
const FormField = ({
  label,
  value,
  labelColor,
  valueColor,
  borderColor,
  infoIconColor,
}: {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  borderColor: string;
  infoIconColor: string;
}) => (
  <div className="flex flex-col gap-2.5">
    <div className="flex items-center gap-1.5">
      <span className={`text-[14px] font-semibold text-[${labelColor}]`}>
        {label}
      </span>
      <InfoIcon color={infoIconColor} />
    </div>
    <div
      className={`overflow-hidden rounded border border-[${borderColor}] bg-[#272822] px-6 py-4`}
    >
      <span
        className={`block truncate text-[14px] font-semibold text-[${valueColor}]`}
      >
        {value}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[508px] flex-col gap-8 rounded bg-[#1a1a17] p-10">
      {/* Header with title and atom icon */}
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AtomIcon color="#b5b5b5" />
      </div>

      {/* Subtitle with chevron - indicates collapsible/expandable section */}
      <div className="flex items-center gap-2">
        <ChevronIcon
          width={12}
          height={8}
          viewBox="0 0 10 6"
          pathData="M1 5L5 1L9 5"
          color="#8b9291"
        />
        <span className="text-[15px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - indicates expandable design options */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronIcon
          width={16}
          height={10}
          viewBox="0 0 12 8"
          pathData="M2 7L6 3L10 7"
          color="#b2b2b1"
        />
        <span className="text-[17px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <FormField
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="#a4a4a3"
        valueColor="#737470"
        borderColor="#a5adad"
        infoIconColor="#a4a4a3"
      />

      {/* Design URL field */}
      <FormField
        label="Design URL"
        value="https://www.figma.com/file/:"
        labelColor="#a3a3a2"
        valueColor="#71726e"
        borderColor="#929291"
        infoIconColor="#a3a3a2"
      />

      {/* Action buttons */}
      <div className="mt-2 flex gap-6">
        <button
          className="flex-1 rounded bg-[#843a17] px-8 py-4 text-center text-[14px] font-semibold text-[#8c8078]"
          type="button"
          aria-label="Awesome"
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded bg-[#843a17] px-8 py-4 text-center text-[14px] font-semibold text-[#8c8078]"
          type="button"
          aria-label="Prepare"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-8">
        <span className="text-[17px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[14px] text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};

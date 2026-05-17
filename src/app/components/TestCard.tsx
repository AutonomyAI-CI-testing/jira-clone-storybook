/**
 * Chevron icon component used for collapsible sections.
 * Points upward to indicate expandable content.
 */
const ChevronIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 7L6 2L11 7" stroke={stroke} strokeWidth="1.5" />
  </svg>
);

/**
 * Info icon component used next to form field labels.
 * Provides visual hint that additional help/context is available.
 */
const InfoIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="6" stroke={stroke} strokeWidth="1.2" />
    <path
      d="M7 4.5V7.5M7 9.5H7.005"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Settings icon component displayed in the card header.
 * Uses a radial dot pattern to represent configuration options.
 */
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="2" stroke="#b5b5b5" strokeWidth="1.5" />
    <circle cx="10" cy="3" r="1.5" stroke="#b5b5b5" strokeWidth="1.5" />
    <circle cx="10" cy="17" r="1.5" stroke="#b5b5b5" strokeWidth="1.5" />
    <circle cx="3" cy="10" r="1.5" stroke="#b5b5b5" strokeWidth="1.5" />
    <circle cx="17" cy="10" r="1.5" stroke="#b5b5b5" strokeWidth="1.5" />
  </svg>
);

/**
 * Reusable form field component with label and info icon.
 * Maintains consistent styling across both token and URL inputs.
 */
const FormField = ({
  label,
  labelColor,
  inputStyle,
  placeholder,
  textColor,
  fontSize,
  lineHeight,
}: {
  label: string;
  labelColor: string;
  inputStyle: React.CSSProperties;
  placeholder: string;
  textColor: string;
  fontSize: string;
  lineHeight: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-1.5">
      <span
        className="font-semibold"
        style={{ fontSize: '11.5px', lineHeight: '13.92px', color: labelColor }}
      >
        {label}
      </span>
      <InfoIcon stroke={labelColor} />
    </div>
    <div
      className="rounded px-3 py-2.5"
      style={{ height: '37px', backgroundColor: '#272822', ...inputStyle }}
    >
      <span
        className="font-semibold"
        style={{ fontSize, lineHeight, color: textColor }}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

/**
 * TestCard component displays a dark-themed configuration card for the UI magician Agent.
 * Includes collapsible sections, form fields for Figma integration, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-64 flex-col gap-4 rounded p-5"
      style={{ backgroundColor: '#1e1f1a', color: '#b5b5b5' }}
    >
      {/* Header with agent name and settings icon */}
      <div className="flex items-center justify-between">
        <span
          className="font-semibold"
          style={{ fontSize: '13.5px', lineHeight: '16.34px' }}
        >
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle showing truncated context */}
      <div className="flex items-center gap-2">
        <ChevronIcon stroke="#8b9291" />
        <span
          className="font-semibold"
          style={{
            fontSize: '11.5px',
            lineHeight: '13.92px',
            color: '#8b9291',
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section with Figma integration fields */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <ChevronIcon stroke="#b2b2b1" />
          <span
            className="font-semibold"
            style={{
              fontSize: '13.5px',
              lineHeight: '16.34px',
              color: '#b2b2b1',
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Figma Personal Access Token input */}
        <FormField
          label="Personal Access Token"
          labelColor="#a4a4a3"
          inputStyle={{ border: '1px solid #a5adad' }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          textColor="#737470"
          fontSize="11.5px"
          lineHeight="13.92px"
        />

        {/* Figma Design URL input with thicker border for emphasis */}
        <FormField
          label="Design URL"
          labelColor="#a3a3a2"
          inputStyle={{ border: '2px solid #929291' }}
          placeholder="https://www.figma.com/file/:"
          textColor="#71726e"
          fontSize="10.5px"
          lineHeight="12.71px"
        />

        {/* Action buttons for submission */}
        <div className="mt-2 flex gap-3">
          <button
            className="rounded font-semibold"
            style={{
              height: '37px',
              width: '85px',
              backgroundColor: '#843a17',
              fontSize: '11.5px',
              lineHeight: '13.92px',
              color: '#8c8078',
            }}
          >
            Awesome
          </button>
          <button
            className="rounded font-semibold"
            style={{
              height: '37px',
              width: '85px',
              backgroundColor: '#843a17',
              fontSize: '11.5px',
              lineHeight: '13.92px',
              color: '#8c8078',
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Section heading for breakdown history */}
      <div className="mt-4">
        <span
          className="font-semibold"
          style={{ fontSize: '13.5px', lineHeight: '16.34px', color: '#b0b0b0' }}
        >
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-xs">© AutonomyAI</span>
      </div>
    </div>
  );
};

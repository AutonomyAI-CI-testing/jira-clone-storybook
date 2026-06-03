// Info icon SVG component - used for help tooltips
const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="text-gray-500"
  >
    <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" />
    <text x="7" y="8.5" textAnchor="middle" fill="currentColor" fontSize="10">
      i
    </text>
  </svg>
);

// Chevron down icon - used to indicate collapsible sections
const ChevronIcon = ({
  color = "text-[#8b9291]",
}: {
  color?: string;
}): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={color}>
    <path
      d="M2 4L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Settings/options icon - used in the header
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="text-gray-500"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="8" cy="2.5" r="1" fill="currentColor" />
    <circle cx="13.5" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="13.5" r="1" fill="currentColor" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" />
  </svg>
);

// Form field component - used for read-only input display
const FormField = ({
  label,
  placeholder,
  textColor,
}: {
  label: string;
  placeholder: string;
  textColor: string;
}): JSX.Element => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <label className="text-sm font-semibold text-[#a4a4a3]">{label}</label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`border-gray-700 bg-gray-900 w-full border px-3 py-2 text-xs font-semibold ${textColor} placeholder-gray-600`}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-96 bg-black p-6 text-white">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <div className="border-gray-600 flex h-6 w-6 items-center justify-center rounded-full border">
          <SettingsIcon />
        </div>
      </div>

      {/* Collapsible section for design frame information */}
      <div className="mb-10">
        <div className="flex items-center gap-2">
          <ChevronIcon />
          <span className="text-sm font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Design input configuration section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon color="text-[#b2b2b1]" />
          <h2 className="text-base font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          textColor="text-[#737470]"
        />

        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          textColor="text-[#71726e]"
        />

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 rounded bg-[#9e5b3a] px-4 py-2 text-sm font-semibold text-[#8c8078] hover:bg-[#8a4f30]"
            type="button"
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded bg-[#9e5b3a] px-4 py-2 text-sm font-semibold text-[#8c8078] hover:bg-[#8a4f30]"
            type="button"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent breakdowns section */}
      <div>
        <h3 className="text-base font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

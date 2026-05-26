// InfoButton: small icon button with hover effect for help/info icons
const InfoButton = ({ color }: { color: string }): JSX.Element => (
  <button
    className={`flex h-[15px] w-[15px] items-center justify-center text-[12px] ${color} hover:opacity-70`}
  >
    ⓘ
  </button>
);

// CollapsibleSection: header with chevron and label for expandable content
const CollapsibleSection = ({
  label,
  textColor,
}: {
  label: string;
  textColor: string;
}): JSX.Element => (
  <div className="mb-8 flex items-center gap-2">
    <button className={`flex items-center ${textColor} hover:opacity-70`}>
      ▴
    </button>
    <span className={`font-semibold ${textColor}`}>{label}</span>
  </div>
);

// FormInput: text input with associated label and optional info button
const FormInput = ({
  label,
  placeholder,
  inputColor,
  labelColor,
}: {
  label: string;
  placeholder: string;
  inputColor: string;
  labelColor: string;
}): JSX.Element => (
  <div className="mb-6">
    <label
      className={`mb-2 flex items-center gap-2 text-[11.5px] font-semibold ${labelColor}`}
    >
      {label}
      <InfoButton color={labelColor} />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border bg-[#272822] px-3 py-2 text-[11.5px] font-semibold focus:outline-none ${inputColor}`}
    />
  </div>
);

// ActionButton: button for primary actions with consistent styling
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button className="flex-1 rounded-[4px] bg-[#843a17] px-6 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9a4319] active:bg-[#793015]">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex h-4 w-4 items-center justify-center text-[#b5b5b5] hover:opacity-70">
          ⚙️
        </button>
      </div>

      {/* Collapsible sections for previous tasks */}
      <CollapsibleSection
        label="From entire frame to a singl..."
        textColor="text-[11.5px] text-[#8b9291]"
      />
      <CollapsibleSection
        label="Add New Design"
        textColor="text-[13.5px] text-[#b2b2b1]"
      />

      {/* Input fields for Figma configuration */}
      <FormInput
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputColor="border-[#929291] text-[#737470] placeholder-[#737470]"
        labelColor="text-[#a4a4a3]"
      />
      <FormInput
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputColor="border-[#a5adad] text-[#71726e] placeholder-[#71726e] text-[10.5px]"
        labelColor="text-[#a3a3a2]"
      />

      {/* Primary action buttons */}
      <div className="mb-12 flex gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section header for historical data */}
      <div className="mb-6">
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#a4a4a3]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

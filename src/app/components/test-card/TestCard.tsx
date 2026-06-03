// Reusable info icon component used for field labels
const InfoIcon = ({ color = "text-[#a4a4a3]" }: { color?: string }): JSX.Element => (
  <svg
    className={`h-3.5 w-3.5 ${color}`}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <text
      x="8"
      y="9.5"
      textAnchor="middle"
      fontSize="10"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

// Reusable form field component with label and input
interface FormFieldProps {
  label: string;
  placeholder: string;
  labelColor: string;
  borderColor: string;
  textColor: string;
  placeholderColor: string;
  infoIconColor?: string;
}

const FormField = ({
  label,
  placeholder,
  labelColor,
  borderColor,
  textColor,
  placeholderColor,
  infoIconColor,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className={`font-primary text-xs font-semibold ${labelColor}`}>
        {label}
      </label>
      <InfoIcon color={infoIconColor} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border px-3 py-2 font-primary text-xs font-semibold bg-[#272822] ${borderColor} ${textColor} ${placeholderColor}`}
    />
  </div>
);

// Menu options icon used in header
const MenuIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#b5b5b5]"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="8" cy="5" r="0.5" fill="currentColor" />
    <circle cx="10.5" cy="8" r="0.5" fill="currentColor" />
    <circle cx="8" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="5.5" cy="8" r="0.5" fill="currentColor" />
  </svg>
);

// Collapsible section component
interface CollapsibleSectionProps {
  title: string;
  textColor: string;
  isLarge?: boolean;
}

const CollapsibleSection = ({
  title,
  textColor,
  isLarge = false,
}: CollapsibleSectionProps): JSX.Element => (
  <div className="mb-8">
    <div className="flex items-center gap-2">
      <span className="text-[#b5b5b5]">⌃</span>
      <span className={`font-primary font-semibold ${textColor} ${isLarge ? "text-base" : "text-xs"}`}>
        {title}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-black px-5 py-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <MenuIcon />
      </div>

      {/* Collapsible section 1 */}
      <CollapsibleSection
        title="From entire frame to a singl..."
        textColor="text-[#8b9291]"
      />

      {/* Collapsible section 2 - Add New Design */}
      <CollapsibleSection
        title="Add New Design"
        textColor="text-[#b2b2b1]"
        isLarge
      />

      {/* Form Fields Section */}
      <div className="space-y-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          borderColor="border-[#929291]"
          textColor="text-[#737470]"
          placeholderColor="placeholder-[#737470]"
          infoIconColor="text-[#a4a4a3]"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelColor="text-[#a3a3a2]"
          borderColor="border-[#a5adad]"
          textColor="text-[#71726e]"
          placeholderColor="placeholder-[#71726e]"
          infoIconColor="text-[#a3a3a2]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="mt-12">
        <h2 className="font-primary text-base font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

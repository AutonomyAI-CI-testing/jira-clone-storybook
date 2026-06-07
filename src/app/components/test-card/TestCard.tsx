// Typography and color constants for consistent styling
const FONT_FAMILY = "Inter, sans-serif";
const INTER_FONT = { fontFamily: FONT_FAMILY };

// Layout and spacing constants
const SPACER_HEIGHT = 40;

// Button styling constants
const ACTION_BUTTON_STYLES = {
  className:
    "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#e8d5c8]",
  style: INTER_FONT,
};

// Text label component - reduces repetition for styled text with optional icon
interface TextLabelProps {
  children: string;
  textColor: string;
  fontSize: string;
  lineHeight?: string;
}

const TextLabel = ({
  children,
  textColor,
  fontSize,
  lineHeight = "normal",
}: TextLabelProps) => (
  // Dynamic Tailwind classes (fontSize, lineHeight, textColor) must be included
  // in className string, not computed in a style object, for Tailwind to generate them
  <span
    className={`font-semibold text-[${fontSize}] leading-${lineHeight} text-[${textColor}]`}
    style={INTER_FONT}
  >
    {children}
  </span>
);

// Field label component - combines label text with info icon
interface FieldLabelProps {
  label: string;
  textColor: string;
  iconColor: string;
}

const FieldLabel = ({ label, textColor, iconColor }: FieldLabelProps) => (
  <div className="mb-2 flex items-center gap-2">
    <TextLabel textColor={textColor} fontSize="11.5px" lineHeight="13.92px">
      {label}
    </TextLabel>
    {/* Info icon with dynamic text color via Tailwind — must be in className */}
    <span className={`text-[13px] text-[${iconColor}]`}>ⓘ</span>
  </div>
);

// Input field component - read-only input with consistent styling
interface ReadOnlyInputProps {
  placeholder: string;
  borderColor: string;
  textColor: string;
}

const ReadOnlyInput = ({
  placeholder,
  borderColor,
  textColor,
}: ReadOnlyInputProps) => (
  // Dynamic Tailwind classes (borderColor, textColor) must be in className string
  // for Tailwind to generate the required styles
  <input
    type="text"
    placeholder={placeholder}
    readOnly
    className={`w-full rounded-none border border-[${borderColor}] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[${textColor}] placeholder-[${textColor}] outline-none`}
    style={INTER_FONT}
  />
);

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1e] p-5">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <TextLabel textColor="#b5b5b5" fontSize="13.5px" lineHeight="16.34px">
          UI magician Agent
        </TextLabel>
        <span className="text-[16px] text-[#b5b5b5]">⚙</span>
      </div>

      {/* Subtitle with description */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11px] font-semibold text-[#8b9291]">^</span>
        <TextLabel textColor="#8b9291" fontSize="11.5px" lineHeight="13.92px">
          From entire frame to a singl...
        </TextLabel>
      </div>

      {/* Spacing before form section — uses dynamic Tailwind class for height */}
      <div className={`h-[${SPACER_HEIGHT}px]`} />

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-semibold text-[#b2b2b1]">^</span>
        <TextLabel textColor="#b2b2b1" fontSize="13.5px" lineHeight="16.34px">
          Add New Design
        </TextLabel>
      </div>

      {/* Personal Access Token input field */}
      <div className="mt-5">
        <FieldLabel
          label="Personal Access Token"
          textColor="#a4a4a3"
          iconColor="#a4a4a3"
        />
        <ReadOnlyInput
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor="#a5adad"
          textColor="#737470"
        />
      </div>

      {/* Design URL input field */}
      <div className="mt-4">
        <FieldLabel
          label="Design URL"
          textColor="#a3a3a2"
          iconColor="#a3a3a2"
        />
        <ReadOnlyInput
          placeholder="https://www.figma.com/file/:"
          borderColor="#929291"
          textColor="#71726e"
        />
      </div>

      {/* Action buttons - "Awesome" and "Prepare" */}
      <div className="mt-5 flex justify-center gap-3">
        <button {...ACTION_BUTTON_STYLES}>Awesome</button>
        <button {...ACTION_BUTTON_STYLES}>Prepare</button>
      </div>

      {/* Spacing before footer section — uses dynamic Tailwind class for height */}
      <div className={`h-[${SPACER_HEIGHT}px]`} />

      {/* Recent Breakdowns section footer */}
      <div>
        <TextLabel textColor="#b0b0b0" fontSize="13.5px" lineHeight="16.34px">
          Recent Breakdowns
        </TextLabel>
      </div>
    </div>
  );
};

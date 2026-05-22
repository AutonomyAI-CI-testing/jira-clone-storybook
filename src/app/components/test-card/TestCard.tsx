// Color palette for the card design
const COLORS = {
  header: "#b5b5b5",
  collapsibleText: "#8b9291",
  addDesignText: "#b2b2b1",
  labelText: "#a4a4a3",
  designUrlLabel: "#a3a3a2",
  tokenInputText: "#737470",
  urlInputText: "#71726e",
  recentBreakdownsText: "#b0b0b0",
  inputBorder: "#333333",
};

// Button styling constants
const BUTTON_COLORS = {
  default: "#8B4513",
  hover: "#A0522D",
  active: "#7A3D0F",
};

// SVG icon for settings (three vertical dots)
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: COLORS.header }}
  >
    <path
      d="M10 2.5C9.80109 2.5 9.61032 2.42098 9.46967 2.28033C9.32902 2.13968 9.25 1.94891 9.25 1.75C9.25 1.55109 9.32902 1.36032 9.46967 1.21967C9.61032 1.07902 9.80109 1 10 1C10.1989 1 10.3897 1.07902 10.5303 1.21967C10.671 1.36032 10.75 1.55109 10.75 1.75C10.75 1.94891 10.671 2.13968 10.5303 2.28033C10.3897 2.42098 10.1989 2.5 10 2.5ZM10 8.75C9.80109 8.75 9.61032 8.82902 9.46967 8.96967C9.32902 9.11032 9.25 9.30109 9.25 9.5C9.25 9.69891 9.32902 9.88968 9.46967 10.0303C9.61032 10.171 9.80109 10.25 10 10.25C10.1989 10.25 10.3897 10.171 10.5303 10.0303C10.671 9.88968 10.75 9.69891 10.75 9.5C10.75 9.30109 10.671 9.11032 10.5303 8.96967C10.3897 8.82902 10.1989 8.75 10 8.75ZM10 15C9.80109 15 9.61032 15.079 9.46967 15.2197C9.32902 15.3603 9.25 15.5511 9.25 15.75C9.25 15.9489 9.32902 16.1397 9.46967 16.2803C9.61032 16.421 9.80109 16.5 10 16.5C10.1989 16.5 10.3897 16.421 10.5303 16.2803C10.671 16.1397 10.75 15.9489 10.75 15.75C10.75 15.5511 10.671 15.3603 10.5303 15.2197C10.3897 15.079 10.1989 15 10 15Z"
      fill="currentColor"
    />
    <path
      d="M17.5 9.25H19.25C19.4489 9.25 19.6397 9.32902 19.7803 9.46967C19.921 9.61032 20 9.80109 20 10C20 10.1989 19.921 10.3897 19.7803 10.5303C19.6397 10.671 19.4489 10.75 19.25 10.75H17.5C17.3011 10.75 17.1103 10.671 16.9697 10.5303C16.829 10.3897 16.75 10.1989 16.75 10C16.75 9.80109 16.829 9.61032 16.9697 9.46967C17.1103 9.32902 17.3011 9.25 17.5 9.25Z"
      fill="currentColor"
    />
    <path
      d="M0.75 10C0.75 9.80109 0.829 9.61032 0.96967 9.46967C1.11032 9.32902 1.30109 9.25 1.5 9.25H3.25C3.44891 9.25 3.63968 9.32902 3.78033 9.46967C3.92098 9.61032 4 9.80109 4 10C4 10.1989 3.92098 10.3897 3.78033 10.5303C3.63968 10.671 3.44891 10.75 3.25 10.75H1.5C1.30109 10.75 1.11032 10.671 0.96967 10.5303C0.829 10.3897 0.75 10.1989 0.75 10Z"
      fill="currentColor"
    />
    <path
      d="M13.475 6.525C13.5703 6.61979 13.75 6.78711 14 6.78711C14.25 6.78711 14.4297 6.61979 14.525 6.525L15.95 5.1C16.0902 4.95902 16.169 4.76719 16.169 4.56797C16.169 4.36875 16.0902 4.17695 15.95 4.035C15.809 3.89293 15.6172 3.814 15.4172 3.814C15.2172 3.814 15.0254 3.89293 14.8844 4.035L13.475 5.444C13.2973 5.62188 13.2973 5.94711 13.475 6.125V6.525ZM6.525 13.475C6.34688 13.6527 6.02656 13.6527 5.85 13.475L4.425 12.05C4.28496 11.9091 4.20644 11.7173 4.20644 11.5172C4.20644 11.3172 4.28496 11.1253 4.425 10.9844C4.56629 10.8424 4.75813 10.7634 4.95813 10.7634C5.15813 10.7634 5.35 10.8424 5.49129 10.9844L6.9 12.3941C7.07813 12.5719 7.07813 12.8972 6.9 13.075V13.475Z"
      fill="currentColor"
    />
    <path
      d="M14.525 13.475L13.1 12.05C12.9223 11.8723 12.9223 11.547 13.1 11.3694C13.2816 11.1913 13.6069 11.1913 13.7844 11.3694L15.2094 12.7944C15.3493 12.9359 15.4276 13.1286 15.4276 13.3297C15.4276 13.5308 15.3493 13.7235 15.2094 13.865C15.0672 14.0074 14.8749 14.0866 14.674 14.0866C14.4731 14.0866 14.2808 14.0074 14.1387 13.865L14.525 13.475ZM5.85 6.525C6.02656 6.34688 6.34688 6.34688 6.525 6.525C6.70313 6.70313 6.70313 7.02656 6.525 7.20312L5.1 8.625C4.95902 8.76504 4.76719 8.84356 4.56797 8.84356C4.36875 8.84356 4.17695 8.76504 4.035 8.625C3.89293 8.48371 3.814 8.29188 3.814 8.09188C3.814 7.89188 3.89293 7.70004 4.035 7.55875L5.85 6.525Z"
      fill="currentColor"
    />
  </svg>
);

// SVG icon for info tooltip
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    style={{ color }}
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <text
      x="8"
      y="10"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

// Create button event handlers with proper color transitions
const createButtonHandlers = () => ({
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = BUTTON_COLORS.hover;
  },
  onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = BUTTON_COLORS.default;
  },
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = BUTTON_COLORS.active;
  },
  onMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = BUTTON_COLORS.default;
  },
});

export const TestCard = (): JSX.Element => {
  const buttonHandlers = createButtonHandlers();

  return (
    <div className="w-full max-w-[254px] rounded-lg bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] font-bold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section for design frame conversion feature */}
      <div className="mb-8 flex items-center gap-3 pl-2">
        <span className="text-[16px]" style={{ color: COLORS.header }}>▲</span>
        <p className="text-[11.5px] font-bold" style={{ color: COLORS.collapsibleText }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section to add a new design */}
      <div className="mb-10 flex items-center gap-3 pl-2">
        <span className="text-[16px]" style={{ color: COLORS.addDesignText }}>▲</span>
        <p className="text-[13.5px] font-bold" style={{ color: COLORS.addDesignText }}>
          Add New Design
        </p>
      </div>

      {/* Personal Access Token input section */}
      <div className="mb-5 flex items-center justify-between">
        <label className="text-[11.5px] font-bold" style={{ color: COLORS.labelText }}>
          Personal Access Token
        </label>
        <InfoIcon color={COLORS.labelText} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-8 w-full border-2 bg-black px-3 py-2 text-[11.5px] font-semibold"
        style={{
          borderColor: COLORS.inputBorder,
          color: COLORS.tokenInputText,
        }}
      />

      {/* Design URL input section */}
      <div className="mb-5 flex items-center justify-between">
        <label className="text-[11.5px] font-bold" style={{ color: COLORS.designUrlLabel }}>
          Design URL
        </label>
        <InfoIcon color={COLORS.designUrlLabel} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-10 w-full border-2 bg-black px-3 py-2 text-[11.5px] font-semibold"
        style={{
          borderColor: COLORS.inputBorder,
          color: COLORS.urlInputText,
        }}
      />

      {/* Action buttons with hover/active states */}
      <div className="mb-12 flex gap-4">
        <button
          className="flex-1 rounded px-4 py-3 text-center text-[11.5px] font-semibold text-white transition-colors"
          style={{ backgroundColor: BUTTON_COLORS.default }}
          {...buttonHandlers}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-3 text-center text-[11.5px] font-semibold text-white transition-colors"
          style={{ backgroundColor: BUTTON_COLORS.default }}
          {...buttonHandlers}
        >
          Prepare
        </button>
      </div>

      {/* Recent breakdowns section */}
      <div className="mt-6">
        <h2 className="text-[13.5px] font-bold" style={{ color: COLORS.recentBreakdownsText }}>
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] font-semibold" style={{ color: COLORS.header }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

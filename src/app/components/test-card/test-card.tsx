// Color palette for the UI Magician Agent interface
const COLORS = {
  headerText: "#b5b5b5",
  sectionText: "#b2b2b1",
  addDesignText: "#b0b0b0",
  labelText: "#a3a3a2",
  iconHint: "#8b9291",
  inputText: "#737470",
  inputBorder: "#333",
  buttonBg: "#6b5850",
  buttonText: "#8c8078",
};

// Helper component for info icon (appears in labels)
const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: COLORS.iconHint }}
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <text
      x="8"
      y="10"
      textAnchor="middle"
      fontSize="12"
      fill="currentColor"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

// Helper component for labeled form input fields
const LabeledInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        className="text-xs font-semibold"
        style={{ color: COLORS.labelText }}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="border-gray-600 bg-gray-900 placeholder-gray-600 rounded border px-3 py-2 text-xs font-semibold"
      style={{
        color: COLORS.inputText,
        borderColor: COLORS.inputBorder,
      }}
      readOnly
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full items-start justify-center bg-black p-8"
    >
      <div className="w-full max-w-2xl space-y-6">
        {/* Header with title and settings icon */}
        <div className="flex items-center justify-between">
          <h1
            className="text-sm font-semibold"
            style={{ color: COLORS.headerText }}
          >
            UI magician Agent
          </h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: COLORS.headerText }}
          >
            <path
              d="M10 2C9.71667 2 9.48333 1.88333 9.3 1.65C9.11667 1.41667 9.08333 1.16667 9.2 0.9C9.31667 0.633333 9.5 0.433333 9.75 0.3C10 0.166667 10.25 0.166667 10.5 0.3C10.75 0.433333 10.9333 0.633333 11.05 0.9C11.1667 1.16667 11.1333 1.41667 10.95 1.65C10.7667 1.88333 10.5333 2 10.25 2H10ZM10 18C9.71667 18 9.48333 17.8833 9.3 17.65C9.11667 17.4167 9.08333 17.1667 9.2 16.9C9.31667 16.6333 9.5 16.4333 9.75 16.3C10 16.1667 10.25 16.1667 10.5 16.3C10.75 16.4333 10.9333 16.6333 11.05 16.9C11.1667 17.1667 11.1333 17.4167 10.95 17.65C10.7667 17.8833 10.5333 18 10.25 18H10ZM2 10C1.71667 10 1.48333 9.88333 1.3 9.65C1.11667 9.41667 1.08333 9.16667 1.2 8.9C1.31667 8.63333 1.5 8.43333 1.75 8.3C2 8.16667 2.25 8.16667 2.5 8.3C2.75 8.43333 2.93333 8.63333 3.05 8.9C3.16667 9.16667 3.13333 9.41667 2.95 9.65C2.76667 9.88333 2.53333 10 2.25 10H2ZM18 10C17.7167 10 17.4833 9.88333 17.3 9.65C17.1167 9.41667 17.0833 9.16667 17.2 8.9C17.3167 8.63333 17.5 8.43333 17.75 8.3C18 8.16667 18.25 8.16667 18.5 8.3C18.75 8.43333 18.9333 8.63333 19.05 8.9C19.1667 9.16667 19.1333 9.41667 18.95 9.65C18.7667 9.88333 18.5333 10 18.25 10H18ZM3.35 4.65C3.13333 4.43333 3.08333 4.16667 3.2 3.95C3.31667 3.73333 3.5 3.56667 3.75 3.45C4 3.33333 4.25 3.33333 4.5 3.45C4.75 3.56667 4.93333 3.73333 5.05 3.95C5.16667 4.16667 5.11667 4.43333 4.9 4.65C4.68333 4.86667 4.41667 4.91667 4.2 4.8C3.98333 4.68333 3.81667 4.5 3.7 4.25C3.58333 4 3.58333 3.75 3.7 3.5C3.81667 3.25 3.98333 3.06667 4.2 2.95C4.41667 2.83333 4.68333 2.88333 4.9 3.1L15.1 13.3C15.3167 13.5167 15.3667 13.7833 15.25 14.0C15.1333 14.2167 14.95 14.3833 14.7 14.5C14.45 14.6167 14.2 14.6167 13.95 14.5C13.7 14.3833 13.5167 14.2 13.4 13.95C13.2833 13.7 13.3333 13.4333 13.55 13.2L3.35 3.05V4.65ZM16.65 15.35C16.8667 15.1333 17.1333 15.0833 17.35 15.2C17.5667 15.3167 17.7333 15.5 17.85 15.75C17.9667 16 17.9667 16.25 17.85 16.5C17.7333 16.75 17.5667 16.9333 17.35 17.05C17.1333 17.1667 16.8667 17.1167 16.65 16.95L6.45 6.75C6.23333 6.53333 6.18333 6.26667 6.3 6.05C6.41667 5.83333 6.6 5.66667 6.85 5.55C7.1 5.43333 7.35 5.43333 7.6 5.55C7.85 5.66667 8.03333 5.83333 8.15 6.05C8.26667 6.26667 8.21667 6.53333 8 6.75L16.65 15.35Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Collapsible section */}
        <div
          className="border-gray-700 flex items-center gap-2 border-b pb-4"
          style={{ color: COLORS.sectionText }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 2L14 8H2L8 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-semibold">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div
          className="flex items-center gap-2"
          style={{ color: COLORS.addDesignText }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8H13M8 3V13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm font-semibold">Add New Design</span>
        </div>

        {/* Form inputs section */}
        <div className="space-y-4">
          <LabeledInput
            label="Personal Access Token"
            placeholder="Enter your token"
          />
          <LabeledInput
            label="Design URL"
            placeholder="https://example.figma.com/..."
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <button
            className="rounded px-4 py-2 text-xs font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className="rounded px-4 py-2 text-xs font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div
          className="border-gray-700 border-t pt-4"
          style={{ color: COLORS.labelText }}
        >
          <h2 className="text-xs font-semibold">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

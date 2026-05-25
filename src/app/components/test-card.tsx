// Color palette for the dark-themed UI card
const COLORS = {
  // Background colors
  bg: {
    card: "#2b2b2b",
    input: "#1a1a1a",
  },
  // Text/border colors
  text: {
    header: "#b5b5b5",
    label: "#b5b5b5",
    heading: "#b2b2b1",
    collapsible: "#8b9291",
    placeholder: "#737470",
    placeholderAlt: "#71726e",
    footer: "#737470",
    icon: "#929291",
    button: "#a89685",
  },
  // Border colors
  border: {
    input: "#4a4a4a",
    icon: "#929291",
  },
  // Button colors
  button: {
    bg: "#843a17",
    bgHover: "#9d4620",
  },
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-full max-w-[500px] p-6"
      style={{ backgroundColor: COLORS.bg.card }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-12 flex items-center justify-between">
        <h1
          className="text-sm font-semibold"
          style={{ color: COLORS.text.header }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <span
          className="text-xs font-semibold"
          style={{ color: COLORS.text.collapsible }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.text.heading }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.text.label }}
          >
            Personal Access Token
          </label>
          {/* Info button for token field - icon only */}
          <button
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full border"
            style={{
              borderColor: COLORS.border.icon,
              color: COLORS.text.icon,
            }}
            aria-label="Personal Access Token help"
          >
            <span className="text-[10px]">ⓘ</span>
          </button>
        </div>
        {/* Read-only password input - displays token status */}
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border-2 px-4 py-3 text-xs font-semibold"
          style={{
            borderColor: COLORS.border.input,
            backgroundColor: COLORS.bg.input,
            color: COLORS.text.placeholder,
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.text.label }}
          >
            Design URL
          </label>
          {/* Info button for URL field - icon only */}
          <button
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full border"
            style={{
              borderColor: COLORS.border.icon,
              color: COLORS.text.icon,
            }}
            aria-label="Design URL help"
          >
            <span className="text-[10px]">ⓘ</span>
          </button>
        </div>
        {/* Read-only URL input - displays design file reference */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 px-4 py-3 text-xs font-semibold"
          style={{
            borderColor: COLORS.border.input,
            backgroundColor: COLORS.bg.input,
            color: COLORS.text.placeholderAlt,
          }}
          readOnly
        />
      </div>

      {/* Action buttons for design operations */}
      <div className="mb-12 flex gap-4">
        <button
          className="flex-1 rounded px-5 py-3 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.button.bg,
            color: COLORS.button.bg,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              COLORS.button.bgHover;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              COLORS.button.bg;
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-5 py-3 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: COLORS.button.bg,
            color: COLORS.button.bg,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              COLORS.button.bgHover;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              COLORS.button.bg;
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div
        className="text-sm font-semibold"
        style={{ color: COLORS.text.header }}
      >
        Recent Breakdowns
      </div>

      {/* Copyright footer */}
      <div
        className="border-t pt-3 text-center text-xs"
        style={{
          borderColor: "#e5e5e5",
          color: COLORS.text.footer,
        }}
      >
        © AutonomyAI
      </div>
    </div>
  );
};

// Settings icon component used in the header
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.text.icon }}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="6" ry="6" />
    <ellipse cx="12" cy="12" rx="6" ry="6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="6" ry="6" transform="rotate(120 12 12)" />
  </svg>
);

// Chevron icon used in collapsible sections
const ChevronUpIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.text.icon }}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

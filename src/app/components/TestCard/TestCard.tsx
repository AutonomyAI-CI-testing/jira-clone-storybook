/**
 * TestCard - A smoke test component that replicates a Figma design.
 * This is a static "dummy" component used to verify the Figma-to-code pipeline.
 *
 * Design characteristics:
 * - Specific dark theme (#282828)
 * - Industrial/technical typography
 * - High-contrast orange-brown action buttons
 */
export const TestCard = () => {
  // Using inline styles for colors because these specific Figma hex values
  // may not be present in the pre-compiled Tailwind stylesheet.
  const colors = {
    background: "#282828",
    foreground: "#e8e8e8",
    muted: "#a89880",
    border: "#555",
    inputBg: "#333",
    label: "#cccccc",
    brand: "#b5451b",
    iconMuted: "#999",
    gear: "#aaaaaa",
  };

  return (
    <div
      id="testElem"
      className="p-4 font-primary-light"
      style={{
        backgroundColor: colors.background,
        color: colors.foreground,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-primary-bold" style={{ color: colors.foreground }}>
          UI magician Agent
        </h1>
        <span className="text-xl" style={{ color: colors.gear }}>
          ⚙
        </span>
      </div>

      {/* Collapsed Status/Context Section */}
      <div className="flex items-center mb-8" style={{ color: colors.muted }}>
        <span className="mr-2 text-xs" aria-hidden="true">
          &#8963;
        </span>
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Configuration Section */}
      <div className="mb-4">
        <div
          className="flex items-center mb-4 font-primary-bold"
          style={{ color: colors.foreground }}
        >
          <span className="mr-2 text-xs" aria-hidden="true">
            &#8963;
          </span>
          <span className="text-lg">Add New Design</span>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <InputField
            id="pat"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            colors={colors}
          />
          <InputField
            id="designUrl"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            colors={colors}
            className="mb-6"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <ActionButton label="Awesome" colors={colors} />
          <ActionButton label="Prepare" colors={colors} />
        </div>
      </div>

      {/* Recent History Section */}
      <div className="mt-8">
        <h2 className="text-lg font-primary-bold" style={{ color: colors.foreground }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

/**
 * Helper component for labeled inputs with an info icon
 */
const InputField = ({
  id,
  label,
  placeholder,
  colors,
  className = "",
}: {
  id: string;
  label: string;
  placeholder: string;
  colors: any;
  className?: string;
}) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="flex items-center text-sm font-medium mb-1"
      style={{ color: colors.label }}
    >
      {label}
      <span
        className="ml-1 w-4 h-4 rounded-full border flex items-center justify-center text-xs font-bold"
        style={{ borderColor: colors.iconMuted, color: colors.iconMuted, lineHeight: 1 }}
        title="More information"
      >
        i
      </span>
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="block w-full rounded p-2 text-sm"
      style={{
        backgroundColor: colors.inputBg,
        border: `1px solid ${colors.border}`,
        color: colors.foreground,
        outline: "none",
      }}
    />
  </div>
);

/**
 * Helper for the prominent orange action buttons
 */
const ActionButton = ({ label, colors }: { label: string; colors: any }) => (
  <button
    className="px-6 py-2 rounded-lg font-primary-bold text-white transition-opacity hover:opacity-90"
    style={{ backgroundColor: colors.brand }}
  >
    {label}
  </button>
);

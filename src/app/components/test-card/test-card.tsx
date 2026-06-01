// Color palette for the dark-themed design form card
const COLORS = {
  // Background colors
  background: "#000000",
  inputBg: "#1a1a1a",
  buttonBg: "#8c6e57",
  // Text colors
  primaryText: "#b5b5b5",
  secondaryText: "#8b9291",
  tertiaryText: "#a4a4a3",
  labelText: "#a3a3a2",
  inputText: "#737470",
  inputTextSmall: "#71726e",
  buttonText: "#8c8078",
  headingText: "#b0b0b0",
  // Border colors
  inputBorder: "#3a3a3a",
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[254px] p-5"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.primaryText }}
        >
          UI magician Agent
        </h1>
        <span className="text-lg" style={{ color: COLORS.primaryText }}>
          ⚙️
        </span>
      </div>

      {/* Collapsible design section */}
      <div className="mb-12 flex items-center gap-2">
        <span className="text-sm" style={{ color: COLORS.primaryText }}>
          ⋀
        </span>
        <p
          className="text-[11.5px] font-semibold"
          style={{ color: COLORS.secondaryText }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add new design section header */}
      <div className="mb-12 flex items-center gap-2">
        <span className="text-sm" style={{ color: COLORS.primaryText }}>
          ⋀
        </span>
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.primaryText }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form section with input fields */}
      <div className="space-y-5">
        {/* Personal Access Token field */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <label
              className="text-[11.5px] font-semibold"
              style={{ color: COLORS.tertiaryText }}
            >
              Personal Access Token
            </label>
            <span style={{ color: COLORS.tertiaryText }}>ⓘ</span>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border px-3 py-2 text-[11.5px] font-semibold"
            style={{
              borderColor: COLORS.inputBorder,
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputText,
            }}
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <label
              className="text-[11.5px] font-semibold"
              style={{ color: COLORS.labelText }}
            >
              Design URL
            </label>
            <span style={{ color: COLORS.labelText }}>ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border px-3 py-2 text-[10.5px] font-semibold"
            style={{
              borderColor: COLORS.inputBorder,
              backgroundColor: COLORS.inputBg,
              color: COLORS.inputTextSmall,
            }}
            readOnly
          />
        </div>
      </div>

      {/* Action buttons for form submission */}
      <div className="mt-8 flex gap-4">
        <button
          className="flex-1 rounded py-3 text-[11.5px] font-semibold transition"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-3 text-[11.5px] font-semibold transition"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent breakdowns section header */}
      <div className="mt-12">
        <h3
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.headingText }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

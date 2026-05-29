// Color palette for consistent styling across the component
const COLORS = {
  background: "#000000",
  border: "#333333",
  card: "#050505",
  input: "#0a0a0a",
  headerText: "#b5b5b5",
  labelText: "#a4a4a3",
  secondaryText: "#8b9291",
  tertiary: "#a3a3a2",
  inputText: "#737470",
  inputPlaceholder: "#71726e",
  focusBorder: "#444444",
  button: "#8c8078",
  buttonHover: "#9b8f86",
  white: "#ffffff",
};

// Font size scale for consistent typography
const FONT_SIZES = {
  header: "13.5px",
  button: "11.5px",
  input: "11.5px",
  label: "10.5px",
  expandLabel: "12px",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-black p-8"
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1
            className="font-primary font-semibold"
            style={{
              fontSize: FONT_SIZES.header,
              color: COLORS.headerText,
            }}
          >
            UI magician Agent
          </h1>
          <button
            style={{ color: COLORS.headerText }}
            className="hover:text-[#ffffff]"
          >
            ⚙️
          </button>
        </div>

        <div className="space-y-2 border-b pb-4" style={{ borderColor: COLORS.border }}>
          <button
            className="flex items-center gap-2 font-semibold"
            style={{
              fontSize: FONT_SIZES.button,
              color: COLORS.secondaryText,
            }}
          >
            <span>▼</span>
            <span>From entire frame to a singl...</span>
          </button>
        </div>

        <div
          className="space-y-4 rounded border p-4"
          style={{
            borderColor: COLORS.border,
            backgroundColor: COLORS.card,
          }}
        >
          <button
            className="flex items-center gap-2 font-semibold"
            style={{
              fontSize: FONT_SIZES.expandLabel,
              color: COLORS.tertiary,
            }}
          >
            <span>▶</span>
            <span>Add New Design</span>
          </button>

          <div className="space-y-2">
            <label
              className="font-semibold"
              style={{
                fontSize: FONT_SIZES.label,
                color: COLORS.labelText,
              }}
            >
              Personal Access Token
            </label>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              style={{
                borderColor: COLORS.border,
                backgroundColor: COLORS.input,
                color: COLORS.inputText,
              }}
              className="w-full rounded border px-3 py-2 placeholder-[#71726e] focus:outline-none"
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = COLORS.focusBorder;
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = COLORS.border;
              }}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                className="font-semibold"
                style={{
                  fontSize: FONT_SIZES.label,
                  color: COLORS.labelText,
                }}
              >
                Design URL
              </label>
              <button
                style={{ color: COLORS.secondaryText }}
                className="hover:text-[#a3a3a2]"
              >
                ℹ️
              </button>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              style={{
                borderColor: COLORS.border,
                backgroundColor: COLORS.input,
                color: COLORS.inputText,
              }}
              className="w-full rounded border px-3 py-2 placeholder-[#71726e] focus:outline-none"
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = COLORS.focusBorder;
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = COLORS.border;
              }}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              className="flex-1 rounded py-2 font-semibold text-white"
              style={{
                backgroundColor: COLORS.button,
                fontSize: FONT_SIZES.button,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = COLORS.buttonHover;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = COLORS.button;
              }}
            >
              Awesome
            </button>
            <button
              className="flex-1 rounded py-2 font-semibold text-white"
              style={{
                backgroundColor: COLORS.button,
                fontSize: FONT_SIZES.button,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = COLORS.buttonHover;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = COLORS.button;
              }}
            >
              Prepare
            </button>
          </div>
        </div>

        <div
          className="pt-4 font-semibold"
          style={{
            fontSize: FONT_SIZES.label,
            color: COLORS.secondaryText,
          }}
        >
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};

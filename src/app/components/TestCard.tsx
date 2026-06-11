/**
 * TestCard component
 *
 * A static, presentational component that replicates a Figma design connection panel.
 * Used for verifying visual rendering of specific design references.
 */

const COLORS = {
  background: "#2a2a2a",
  titleText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeading: "#b2b2b1",
  label: "#a4a4a3",
  labelUrl: "#a3a3a2",
  inputBg: "#272822",
  inputBorderPat: "#a5adad",
  inputBorderUrl: "#929291",
  placeholderPat: "#737470",
  placeholderUrl: "#71726e",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  footerHeading: "#b0b0b0",
} as const;

interface ChevronProps {
  color: string;
}

const ChevronUp = ({ color }: ChevronProps) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 8L6 14H18L12 8Z" fill={color} />
  </svg>
);

const InfoIcon = () => <span>ⓘ</span>;

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans p-5"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.titleText }}
        >
          UI magician Agent
        </h2>
        <span>⚙️</span>
      </div>

      {/* Subtitle */}
      <div className="mt-1 flex items-center gap-1.5">
        <ChevronUp color={COLORS.subtitleText} />
        <p
          className="text-xs font-semibold"
          style={{ color: COLORS.subtitleText }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mt-8 flex items-center gap-2">
        <ChevronUp color={COLORS.sectionHeading} />
        <h3
          className="text-sm font-semibold"
          style={{ color: COLORS.sectionHeading }}
        >
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <label
            htmlFor="pat"
            className="text-xs font-semibold"
            style={{ color: COLORS.label }}
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1 w-full rounded border px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorderPat,
            color: COLORS.placeholderPat,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <label
            htmlFor="designUrl"
            className="text-xs font-semibold"
            style={{ color: COLORS.labelUrl }}
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="mt-1 w-full rounded border-2 px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorderUrl,
            color: COLORS.placeholderUrl,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          className="rounded px-8 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="rounded px-8 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h3
          className="text-sm font-semibold"
          style={{ color: COLORS.footerHeading }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

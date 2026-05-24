import { useState } from "react";
import { FiChevronUp, FiChevronDown, FiInfo, FiSettings } from "react-icons/fi";

// Color palette for the dark-themed UI magician agent panel
const COLORS = {
  header: "#b5b5b5",
  chevronFrame: "#b0b0b0",
  textFrame: "#8b9291",
  chevronDesign: "#b2b2b1",
  textDesign: "#b2b2b1",
  labelToken: "#a4a4a3",
  labelUrl: "#a3a3a2",
  inputBorder: "#666664",
  inputText: "#71726e",
  buttonAwesome: { bg: "#8b5a3c", text: "#c4b5aa" },
  buttonPrepare: { bg: "#6b7b7a", text: "#c4b5aa" },
  heading: "#b0b0b0",
  footer: "#a3a3a2",
};

const ICON_SIZES = {
  settings: 16,
  chevronFrame: 14,
  chevronDesign: 16,
  info: 14,
};

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(false);
  const [isDesignExpanded, setIsDesignExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm bg-black p-10">
      {/* Header Section */}
      <div className="mb-10 flex items-center justify-between">
        <h1
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.header }}
        >
          UI magician Agent
        </h1>
        <FiSettings
          size={ICON_SIZES.settings}
          style={{ color: COLORS.header }}
          className="cursor-pointer"
        />
      </div>

      {/* Frame Expansion Section */}
      <div className="mb-16">
        <button
          onClick={() => setIsFrameExpanded(!isFrameExpanded)}
          className="mb-3 flex items-center gap-2 bg-transparent p-0 text-left"
        >
          {isFrameExpanded ? (
            <FiChevronUp
              size={ICON_SIZES.chevronFrame}
              style={{ color: COLORS.chevronFrame }}
            />
          ) : (
            <FiChevronDown
              size={ICON_SIZES.chevronFrame}
              style={{ color: COLORS.chevronFrame }}
            />
          )}
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.textFrame }}
          >
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12">
        <button
          onClick={() => setIsDesignExpanded(!isDesignExpanded)}
          className="flex items-center gap-2 bg-transparent p-0 text-left"
        >
          {isDesignExpanded ? (
            <FiChevronUp
              size={ICON_SIZES.chevronDesign}
              style={{ color: COLORS.chevronDesign }}
            />
          ) : (
            <FiChevronDown
              size={ICON_SIZES.chevronDesign}
              style={{ color: COLORS.chevronDesign }}
            />
          )}
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: COLORS.textDesign }}
          >
            Add New Design
          </span>
        </button>
      </div>

      {/* Personal Access Token Section */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-1.5">
          <label
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.labelToken }}
          >
            Personal Access Token
          </label>
          <FiInfo size={ICON_SIZES.info} style={{ color: COLORS.labelToken }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full border bg-transparent px-4 py-3.5 text-[10.5px] font-normal placeholder:text-[${COLORS.inputText}]`}
          style={{
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL Section */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-1.5">
          <label
            className="text-[11.5px] font-semibold"
            style={{ color: COLORS.labelUrl }}
          >
            Design URL
          </label>
          <FiInfo size={ICON_SIZES.info} style={{ color: COLORS.labelUrl }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full border bg-transparent px-4 py-3.5 text-[10.5px] font-normal placeholder:text-[${COLORS.inputText}]`}
          style={{
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-4">
        <button
          className="flex-1 rounded px-6 py-3 text-[11.5px] font-normal transition-opacity hover:opacity-80 active:opacity-60"
          style={{
            backgroundColor: COLORS.buttonAwesome.bg,
            color: COLORS.buttonAwesome.text,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-6 py-3 text-[11.5px] font-normal transition-opacity hover:opacity-80 active:opacity-60"
          style={{
            backgroundColor: COLORS.buttonPrepare.bg,
            color: COLORS.buttonPrepare.text,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.heading }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3">
        <p
          className="text-center text-[11.5px]"
          style={{ color: COLORS.footer }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

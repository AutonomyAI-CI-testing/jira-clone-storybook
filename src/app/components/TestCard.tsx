import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

// Color scheme for dark theme card
const COLORS = {
  bg: "#2a2a2a",
  inputBg: "#272822",
  inputBorder: "#a5adad",
  inputBorderDesignUrl: "#929291",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  recentText: "#b0b0b0",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  iconColor: "text-gray-400",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto max-w-sm rounded-lg p-6 shadow-md"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-lg font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h2>
        <AiOutlineSetting className={COLORS.iconColor} size={20} />
      </div>
      {/* Subtitle Row */}
      <div className="mb-6 flex items-center gap-1">
        <BiChevronUp className={COLORS.iconColor} size={20} />
        <p className="text-sm" style={{ color: COLORS.subtitleText }}>
          From entire frame to a singl...
        </p>
      </div>
      <div className="mb-6" /> {/* Spacer / gap */}
      {/* Add New Design Section */}
      <div className="mb-4 flex items-center gap-1">
        <BiChevronUp className={COLORS.iconColor} size={20} />
        <h3
          className="text-md font-semibold"
          style={{ color: COLORS.sectionText }}
        >
          Add New Design
        </h3>
      </div>
      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label
          className="mb-1 flex items-center gap-1 text-sm"
          style={{ color: COLORS.labelText }}
        >
          Personal Access Token
          <AiOutlineInfoCircle size={14} />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="text-gray-200 focus:ring-blue-500 w-full rounded p-2 focus:outline-none focus:ring-2"
          style={{
            backgroundColor: COLORS.inputBg,
            borderWidth: "1px",
            borderColor: COLORS.inputBorder,
          }}
        />
      </div>
      {/* Design URL Field */}
      <div className="mb-6">
        <label
          className="mb-1 flex items-center gap-1 text-sm"
          style={{ color: COLORS.labelText }}
        >
          Design URL
          <AiOutlineInfoCircle size={14} />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file:/"
          className="text-gray-200 focus:ring-blue-500 w-full rounded p-2 focus:outline-none focus:ring-2"
          style={{
            backgroundColor: COLORS.inputBg,
            borderWidth: "2px",
            borderColor: COLORS.inputBorderDesignUrl,
          }}
        />
      </div>
      {/* Action Buttons */}
      <div className="mb-6 flex gap-4">
        <button
          className="w-full rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="w-full rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>
      {/* Recent Breakdowns Heading */}
      <div>
        <h3
          className="text-md font-semibold"
          style={{ color: COLORS.recentText }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

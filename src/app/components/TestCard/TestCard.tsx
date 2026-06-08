import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Color values for button states
const BUTTON_BG_COLOR = "#8c4b2d";
const BUTTON_HOVER_COLOR = "#a65d3a";

// Common input className for consistency
const INPUT_CLASSNAME =
  "shadow appearance-none border border-neutral-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-neutral-800";

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-neutral-900 min-h-screen p-4 text-white">
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-neutral-400" size={20} />
      </div>

      {/* Subtitle Row */}
      <div className="text-neutral-400 mb-4 flex items-center">
        <FiChevronUp className="text-neutral-400 mr-2" size={20} />
        <p className="text-neutral-400">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 flex items-center text-white">
        <FiChevronUp className="mr-2 text-white" size={20} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label
          htmlFor="personalAccessToken"
          className="text-neutral-400 mb-2 block text-sm font-bold"
        >
          Personal Access Token
          <FiInfo className="text-neutral-400 ml-1 inline-block" size={16} />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_CLASSNAME}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label
          htmlFor="designURL"
          className="text-neutral-400 mb-2 block text-sm font-bold"
        >
          Design URL
          <FiInfo className="text-neutral-400 ml-1 inline-block" size={16} />
        </label>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file:/"
          className={INPUT_CLASSNAME}
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex justify-between">
        <button
          style={{ backgroundColor: BUTTON_BG_COLOR }}
          className="focus:shadow-outline mr-2 flex-1 rounded px-4 py-2 font-bold text-white hover:opacity-90 focus:outline-none"
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = BUTTON_HOVER_COLOR)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = BUTTON_BG_COLOR)
          }
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: BUTTON_BG_COLOR }}
          className="focus:shadow-outline ml-2 flex-1 rounded px-4 py-2 font-bold text-white hover:opacity-90 focus:outline-none"
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = BUTTON_HOVER_COLOR)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = BUTTON_BG_COLOR)
          }
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <div>
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;

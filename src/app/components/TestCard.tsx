import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color constants for design tokens
const COLORS = {
  cardBg: "bg-[#2a2a2a]",
  accent: "text-[#c1622e]",
  buttonBg: "bg-[#c1622e]",
  buttonHover: "hover:bg-[#a8522a]",
  inputBg: "bg-[#1e1e1e]",
  inputBorder: "border-[#555]",
} as const;

/**
 * A decorative UI panel that mimics a Figma design tool interface.
 * Used for visual testing and showcasing "UI magician Agent" capabilities.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <section
        className={`${COLORS.cardBg} rounded-xl p-5 w-full max-w-sm flex flex-col font-sans shadow-xl`}
        aria-labelledby="card-title"
      >
        {/* Header row */}
        <header className="flex items-center justify-between">
          <h2 id="card-title" className="font-bold text-white text-base">
            UI magician Agent
          </h2>
          <HiCog className="text-gray-400" size={20} aria-hidden="true" />
        </header>

        {/* Status/Context row */}
        <div className="flex items-center gap-1 mt-2">
          <HiChevronUp className={COLORS.accent} size={16} aria-hidden="true" />
          <span className={`${COLORS.accent} text-sm`}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Form Section */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <HiChevronUp className="text-white" size={20} aria-hidden="true" />
            <h3 className="font-bold text-white text-lg">Add New Design</h3>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Personal Access Token field */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label
                  htmlFor="pat-input"
                  className="text-white text-sm cursor-pointer"
                >
                  Personal Access Token
                </label>
                <HiInformationCircle
                  className="text-gray-400"
                  size={14}
                  aria-hidden="true"
                />
              </div>
              <input
                id="pat-input"
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className={`w-full ${COLORS.inputBg} border ${COLORS.inputBorder} rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 outline-none focus:ring-1 focus:ring-[#c1622e]`}
                readOnly
              />
            </div>

            {/* Design URL field */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label
                  htmlFor="url-input"
                  className="text-white text-sm cursor-pointer"
                >
                  Design URL
                </label>
                <HiInformationCircle
                  className="text-gray-400"
                  size={14}
                  aria-hidden="true"
                />
              </div>
              <input
                id="url-input"
                type="text"
                placeholder="https://www.figma.com/file/:"
                className={`w-full ${COLORS.inputBg} border ${COLORS.inputBorder} rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 outline-none focus:ring-1 focus:ring-[#c1622e]`}
                readOnly
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                className={`${COLORS.buttonBg} ${COLORS.buttonHover} text-white rounded-lg px-4 py-3 font-semibold flex-1 transition-colors`}
              >
                Awesome
              </button>
              <button
                type="button"
                className={`${COLORS.buttonBg} ${COLORS.buttonHover} text-white rounded-lg px-4 py-3 font-semibold flex-1 transition-colors`}
              >
                Prepare
              </button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <footer className="mt-6">
          <h3 className="font-bold text-white text-lg">Recent Breakdowns</h3>
        </footer>
      </section>
    </div>
  );
};

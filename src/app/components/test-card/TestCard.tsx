import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";

// Design tokens for the TestCard smoke test.
// These are hardcoded as per requirements to verify Tailwind rendering with arbitrary values.
const COLORS = {
  CARD_BG: "bg-[#282828]",
  INPUT_BG: "bg-[#3a3a3a]",
  PRIMARY_BUTTON: "bg-[#b5541e]",
  TEXT_MUTED: "text-gray-400",
  TEXT_HIGHLIGHT: "text-amber-600",
} as const;

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className={`${COLORS.CARD_BG} shadow-xl w-full max-w-xs rounded-lg p-4 text-white`}
    >
      {/* Header Row: Title and Settings Icon */}
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <AiOutlineSetting className={`${COLORS.TEXT_MUTED} text-xl`} />
      </div>

      {/* Collapsed Subtitle: Shows a truncated preview of the scope */}
      <div className="mb-6 flex items-center gap-1">
        <RiArrowDropUpLine className={COLORS.TEXT_MUTED} />
        <span className={`${COLORS.TEXT_HIGHLIGHT} truncate text-sm`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Form Section: Add New Design */}
      <div className="mb-4 flex items-center gap-1">
        <RiArrowDropUpLine />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1">
          <label htmlFor="pat" className="text-sm font-medium">
            Personal Access Token
          </label>
          <HiInformationCircle className={`${COLORS.TEXT_MUTED} inline`} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full ${COLORS.INPUT_BG} border-gray-600 text-gray-400 focus:border-amber-500 rounded border px-3 py-2 text-sm transition-colors focus:outline-none`}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <label htmlFor="designUrl" className="text-sm font-medium">
            Design URL
          </label>
          <HiInformationCircle className={`${COLORS.TEXT_MUTED} inline`} />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full ${COLORS.INPUT_BG} border-gray-600 text-gray-400 focus:border-amber-500 rounded border px-3 py-2 text-sm transition-colors focus:outline-none`}
        />
      </div>

      {/* Actions: Primary CTA buttons */}
      <div className="mb-8 flex justify-center gap-3">
        <button
          className={`${COLORS.PRIMARY_BUTTON} flex-1 rounded-lg px-6 py-2 font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]`}
        >
          Awesome
        </button>
        <button
          className={`${COLORS.PRIMARY_BUTTON} flex-1 rounded-lg px-6 py-2 font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]`}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h2 className="mt-2 text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Design tokens matching the themed UI
const COLORS = {
  bg: "#2a2a2a",
  bgInput: "#3a3a3a",
  border: "#555",
  primary: "#b85c30",
  textMuted: "#c97a50",
};

/**
 * TestCard component for managing UI Agent designs and breakdowns.
 * Displays configuration fields for Figma PAT and Design URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="font-sans flex w-[280px] flex-col gap-4 rounded-xl p-5 text-white"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="hover:opacity-80 focus:outline-none"
        >
          <IoSettingsOutline className="text-xl" />
        </button>
      </div>

      {/* Collapsible Chevron Row - Represents active context */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-xl" style={{ color: COLORS.textMuted }} />
        <span style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-xl" />
        <h3 className="font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="pat" className="text-sm">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle
            className="cursor-help text-sm"
            title="Your Figma Personal Access Token"
          />
        </div>
        <input
          id="pat"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="text-gray-300 w-full rounded border px-3 py-2 focus:outline-none"
          style={{
            backgroundColor: COLORS.bgInput,
            borderColor: COLORS.border,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="design-url" className="text-sm">
            Design URL
          </label>
          <AiOutlineInfoCircle
            className="cursor-help text-sm"
            title="The URL of the Figma file"
          />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="text-gray-300 w-full rounded border px-3 py-2 focus:outline-none"
          style={{
            backgroundColor: COLORS.bgInput,
            borderColor: COLORS.border,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-full px-5 py-2 text-white hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-full px-5 py-2 text-white hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-lg font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

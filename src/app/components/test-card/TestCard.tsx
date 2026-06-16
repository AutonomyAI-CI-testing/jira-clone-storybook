import React from "react";
import { LuSettings2, LuChevronUp, LuInfo } from "react-icons/lu";

/**
 * TestCard Component
 * 
 * A self-contained component that reproduces a Figma-style plugin interface.
 * Built as a smoke test to validate component generation from design.
 * 
 * Design specifications:
 * - Background: #2a2a2a (Dark zinc-like gray)
 * - Accent: #b5541e (Muted orange/brown)
 */

// Hex values extracted from design requirements
const COLORS = {
  background: "#2a2a2a",
  accent: "#b5541e",
  inputBg: "#1e1e1e",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-6 rounded-lg w-full max-w-sm text-white font-sans"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header: Title and Settings */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-white">UI magician Agent</h1>
        <LuSettings2 className="text-gray-400" aria-label="Settings" />
      </div>

      {/* Subtitle: Navigation indicator */}
      <div className="flex items-center gap-2 mt-2">
        <LuChevronUp style={{ color: COLORS.accent }} />
        <span className="text-sm" style={{ color: COLORS.accent }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible Section Header */}
      <div className="flex items-center gap-2 mt-8">
        <LuChevronUp className="text-white" />
        <span className="font-bold text-white text-lg">Add New Design</span>
      </div>

      {/* Input Field: Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-1 text-sm text-gray-300">
          <label htmlFor="personalAccessToken">Personal Access Token</label>
          <LuInfo className="cursor-help" title="Figma Personal Access Token" />
        </div>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="border border-zinc-600 rounded p-2 w-full text-gray-400 placeholder:text-gray-600 mt-2 outline-none focus:border-zinc-400 transition-colors"
          style={{ backgroundColor: COLORS.inputBg }}
        />
      </div>

      {/* Input Field: Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-1 text-sm text-gray-300">
          <label htmlFor="designURL">Design URL</label>
          <LuInfo className="cursor-help" title="Link to the Figma file" />
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="border border-zinc-600 rounded p-2 w-full text-gray-400 placeholder:text-gray-600 mt-2 outline-none focus:border-zinc-400 transition-colors"
          style={{ backgroundColor: COLORS.inputBg }}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 mt-6">
        <button 
          className="text-white rounded-lg px-6 py-3 font-semibold flex-1 active:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.accent }}
        >
          Awesome
        </button>
        <button 
          className="text-white rounded-lg px-6 py-3 font-semibold flex-1 active:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.accent }}
        >
          Prepare
        </button>
      </div>

      {/* Section Footer: Historical context */}
      <h2 className="font-bold text-white text-lg mt-8">
        Recent Breakdowns
      </h2>
    </div>
  );
};

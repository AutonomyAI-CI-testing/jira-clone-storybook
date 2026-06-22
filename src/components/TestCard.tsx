import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const COLORS = {
  background: "#2a2a2a",
  surface: "#1e1e1e",
  primary: "#b85c38",
  accent: "#c4835a",
  border: "#555",
  textMuted: "#a0a0a0",
  textWhiteMuted: "rgba(255, 255, 255, 0.8)",
  textWhiteHint: "rgba(255, 255, 255, 0.7)",
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Reusable input field for the TestCard to keep the main component clean.
 * Uses inline styles for colors as this file is outside the Tailwind scan path.
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mt-3 first:mt-4">
    <div className="mb-2 flex items-center gap-1.5">
      <label
        htmlFor={id}
        className="text-sm"
        style={{ color: COLORS.textWhiteMuted }}
      >
        {label}
      </label>
      <AiOutlineInfoCircle
        size={16}
        className="ml-2"
        style={{ color: COLORS.textWhiteHint }}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-1"
      style={{
        backgroundColor: COLORS.surface,
        borderColor: COLORS.border,
        color: COLORS.textMuted,
        // Manual focus ring color since it's a custom hex
        boxShadow: "0 0 0 1px transparent",
      }}
      // Note: tailwind focus:ring-1 uses box-shadow, so we'd need a custom class or style for the focus color
      // for now keeping the tailwind class for the ring-1 logic but the color is hard to do inline for focus state
      // without extra complexity. The original code had focus:ring-[#b85c38] which WON'T work outside src/app.
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="font-sans w-full max-w-xs rounded-2xl p-6"
      style={{ backgroundColor: COLORS.background, color: "white" }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <IoSettingsOutline size={22} style={{ color: COLORS.textWhiteMuted }} />
      </div>

      {/* Collapsed Row - displays agent current focus/state */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp size={20} style={{ color: COLORS.accent }} />
        <span className="truncate text-sm" style={{ color: COLORS.accent }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual divider/spacer between agent info and actions */}
      <div className="my-6" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={20} className="text-white" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary Action Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 rounded-lg px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          Prepare
        </button>
      </div>

      {/* Secondary section for history/prior runs */}
      <h2 className="mt-8 text-xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};

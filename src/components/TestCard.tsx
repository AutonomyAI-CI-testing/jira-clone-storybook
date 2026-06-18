import React from "react";
import { Settings, ChevronUp, Info, LucideIcon } from "lucide-react";

/**
 * TestCard component for visual preview.
 * This component represents a UI Magician Agent interface for adding figma designs.
 * Note: Styles are hardcoded with specific hex values to match the intended dark theme design.
 */

const COLORS = {
  bgPrimary: "#1a1a1a",
  bgSecondary: "#2a2a2a",
  accent: "#c97b4b",
  button: "#9b4a1f",
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mb-4 last:mb-6">
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-2 text-sm font-medium"
    >
      {label}
      <Info className="text-gray-400 h-4 w-4" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="border-gray-600 placeholder-gray-400 focus:ring-gray-500 w-full rounded-md border p-2 text-white focus:outline-none focus:ring-1"
      style={{ backgroundColor: COLORS.bgSecondary }}
    />
  </div>
);

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  titleClassName?: string;
}

const SectionHeader = ({
  icon: Icon,
  title,
  titleClassName = "text-base font-bold",
}: SectionHeaderProps) => (
  <div className="mb-4 flex items-center gap-2">
    <Icon className="h-4 w-4" />
    <h3 className={titleClassName}>{title}</h3>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto max-w-sm rounded-lg p-4 text-white shadow-lg"
      style={{ backgroundColor: COLORS.bgPrimary, color: "white" }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <Settings className="h-5 w-5 cursor-pointer transition-opacity hover:opacity-80" />
      </div>

      {/* Subtitle */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUp className="h-4 w-4" />
        <span className="text-sm" style={{ color: COLORS.accent }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <SectionHeader icon={ChevronUp} title="Add New Design" />

      {/* Inputs */}
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

      {/* Action Buttons */}
      <div className="mb-6 flex gap-4">
        <button
          className="flex-1 rounded-lg px-4 py-2 font-medium text-white transition-all hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: COLORS.button }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-4 py-2 font-medium text-white transition-all hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: COLORS.button }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="border-gray-800 border-t pt-4">
        <h3 className="text-base font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

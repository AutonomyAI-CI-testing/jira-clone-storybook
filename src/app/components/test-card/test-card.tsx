import { useState } from "react";

// Button styling constants for Orange theme with hover/active states
const ORANGE_BUTTON_STYLE = {
  backgroundColor: "var(--Orange800)",
  color: "var(--Orange200)",
};

const ORANGE_HOVER_COLOR = "var(--Orange700)";
const ORANGE_PRESSED_COLOR = "var(--Orange900)";
const ORANGE_DEFAULT_COLOR = "var(--Orange800)";

/**
 * TestCard component displays a configuration interface for the UI Magician Agent.
 * Features collapsible sections, form inputs for credentials and design URLs,
 * and action buttons with visual hover/press feedback.
 */
export const TestCard = (): JSX.Element => {
  const [expandedSection1, setExpandedSection1] = useState(true);
  const [expandedSection2, setExpandedSection2] = useState(true);

  return (
    <div className="bg-black p-8 font-primary-bold text-sm">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg text-font-inverse">UI magician Agent</h1>
        <button className="cursor-pointer text-font-subtle hover:text-font-inverse">
          ⚙️
        </button>
      </div>

      {/* Collapsible Section 1: Task Description */}
      <div className="mb-6">
        <button
          onClick={() => setExpandedSection1(!expandedSection1)}
          className="flex w-full items-center gap-3 text-font-subtle hover:text-font-inverse"
        >
          <span className="text-lg">{expandedSection1 ? "▲" : "▼"}</span>
          <span className="text-sm font-semibold text-font-subtle">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Collapsible Section 2: Design Input */}
      <div className="mb-8">
        <button
          onClick={() => setExpandedSection2(!expandedSection2)}
          className="flex w-full items-center gap-3 text-font-subtle hover:text-font-inverse"
        >
          <span className="text-lg">{expandedSection2 ? "▲" : "▼"}</span>
          <span className="text-base font-semibold text-font-subtle">
            Add New Design
          </span>
        </button>
      </div>

      {/* Configuration Form Fields */}
      <div className="space-y-6">
        {/* Personal Access Token Input */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-sm font-semibold text-font-inverse">
              Personal Access Token
            </label>
            <button
              className="text-xs text-font-subtle hover:text-font-inverse"
              aria-label="Personal Access Token help"
            >
              ⓘ
            </button>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-border-input bg-background-input px-4 py-3 text-xs font-semibold text-font placeholder-font-subtlest focus:border-border-focused focus:outline-none"
            aria-label="Personal Access Token"
          />
        </div>

        {/* Design URL Input */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-sm font-semibold text-font-inverse">
              Design URL
            </label>
            <button
              className="text-xs text-font-subtle hover:text-font-inverse"
              aria-label="Design URL help"
            >
              ⓘ
            </button>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-border-input bg-background-input px-4 py-3 text-xs font-semibold text-font placeholder-font-subtlest focus:border-border-focused focus:outline-none"
            aria-label="Design URL"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            className="flex-1 rounded px-6 py-3 text-sm font-semibold"
            style={ORANGE_BUTTON_STYLE}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_HOVER_COLOR;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_DEFAULT_COLOR;
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_PRESSED_COLOR;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_DEFAULT_COLOR;
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-6 py-3 text-sm font-semibold"
            style={ORANGE_BUTTON_STYLE}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_HOVER_COLOR;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_DEFAULT_COLOR;
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_PRESSED_COLOR;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE_DEFAULT_COLOR;
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer: Recent Breakdowns */}
      <div className="mt-12 pt-8">
        <h2 className="text-lg font-semibold text-font-inverse">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer: Copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};

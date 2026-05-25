import { useState } from "react";

// Help icon SVG used in form field labels
const HELP_ICON = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

// Expanded state toggle icon (pointing down)
const TOGGLE_EXPANDED_ICON = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

// Collapsed state toggle icon (pointing right)
const TOGGLE_COLLAPSED_ICON = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 17l5-5-5-5z" />
  </svg>
);

// Settings icon SVG in header
const SETTINGS_ICON = (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="1" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="23" />
    <line x1="23" y1="12" x2="20" y2="12" />
    <line x1="4" y1="12" x2="1" y2="12" />
  </svg>
);

interface TestCardProps {
  isFirstOpenInitial?: boolean;
  isSecondOpenInitial?: boolean;
}

export const TestCard = ({
  isFirstOpenInitial = true,
  isSecondOpenInitial = true,
}: TestCardProps = {}): JSX.Element => {
  const [isFirstOpen, setIsFirstOpen] = useState(isFirstOpenInitial);
  const [isSecondOpen, setIsSecondOpen] = useState(isSecondOpenInitial);

  return (
    <div className="w-64 bg-[#2b2b2b] text-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 px-5 py-5">
        <h1 className="text-base font-semibold text-gray-400">UI magician Agent</h1>
        <button className="text-gray-500 hover:text-gray-400">
          {SETTINGS_ICON}
        </button>
      </div>

      {/* First Collapsible Section */}
      <button
        onClick={() => setIsFirstOpen(!isFirstOpen)}
        className="flex w-full items-center gap-3 border-b border-gray-700 px-5 py-5 text-left hover:bg-[#333333]"
      >
        <span className="text-gray-500">
          {isFirstOpen ? TOGGLE_EXPANDED_ICON : TOGGLE_COLLAPSED_ICON}
        </span>
        <span className="text-xs font-semibold text-gray-500">
          From entire frame to a singl...
        </span>
      </button>

      {/* Second Collapsible Section */}
      <button
        onClick={() => setIsSecondOpen(!isSecondOpen)}
        className="flex w-full items-center gap-3 border-b border-gray-700 px-5 py-5 text-left hover:bg-[#333333]"
      >
        <span className="text-gray-500">
          {isSecondOpen ? TOGGLE_EXPANDED_ICON : TOGGLE_COLLAPSED_ICON}
        </span>
        <span className="text-sm font-semibold text-gray-400">Add New Design</span>
      </button>

      {/* Form Content */}
      {isSecondOpen && (
        <div className="space-y-5 border-b border-gray-700 px-5 py-6">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-400">
                Personal Access Token
              </label>
              <button className="text-gray-500 hover:text-gray-400">
                {HELP_ICON}
              </button>
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border border-gray-600 bg-transparent px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-400">Design URL</label>
              <button className="text-gray-500 hover:text-gray-400">
                {HELP_ICON}
              </button>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-gray-600 bg-transparent px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 rounded-[4px] bg-[#843a17] px-4 py-2 text-xs font-semibold text-gray-500 hover:bg-[#953d1a] active:bg-[#73341a]">
              Awesome
            </button>
            <button className="flex-1 rounded-[4px] bg-[#843a17] px-4 py-2 text-xs font-semibold text-gray-500 hover:bg-[#953d1a] active:bg-[#73341a]">
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns Section */}
      <div className="border-t border-gray-700 px-5 py-6">
        <h2 className="text-sm font-semibold text-gray-400">Recent Breakdowns</h2>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-500">© AutonomyAI</p>
      </div>
    </div>
  );
};

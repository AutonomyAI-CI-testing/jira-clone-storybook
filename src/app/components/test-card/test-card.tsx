import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

// Button color used for primary actions (Awesome and Prepare buttons)
const BUTTON_COLOR = "#8B5A3C";

// Sample token value for display purposes
const SAMPLE_TOKEN = "figid_xxxxxxxxxxxxxxxxx";

// Sample design URL for display purposes
const SAMPLE_URL = "https://www.figma.com/file/:";

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface p-4">
      <div className="w-full max-w-xs space-y-4 rounded-lg bg-black p-6 text-font-subtle">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-sm font-semibold text-font">UI magician Agent</h1>
          <button className="text-font-subtle hover:text-font" aria-label="Settings">
            <FaCog size={16} />
          </button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="border-b border-border-input py-3">
          <button className="flex w-full items-center justify-between text-left text-xs font-medium text-font-subtle hover:text-font">
            <span>From entire frame to a singl...</span>
            <FaChevronUp size={12} />
          </button>
        </div>

        {/* Collapsible Section 2 - Add New Design */}
        <div className="border-b border-border-input py-3">
          <button className="flex w-full items-center justify-between text-left text-xs font-medium text-font-subtle hover:text-font">
            <span>Add New Design</span>
            <FaChevronUp size={12} />
          </button>
        </div>

        {/* Personal Access Token Input */}
        <div className="space-y-2 py-2">
          <div className="flex items-center gap-2">
            <label htmlFor="token" className="text-xs font-medium text-font-subtle">
              Personal Access Token
            </label>
            <FaInfoCircle size={12} className="text-font-subtlest" />
          </div>
          <input
            id="token"
            type="password"
            value={SAMPLE_TOKEN}
            readOnly
            className="w-full border border-border-input bg-black px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest focus:border-border-focused focus:outline-none focus:ring-0"
          />
        </div>

        {/* Design URL Input */}
        <div className="space-y-2 py-2">
          <div className="flex items-center gap-2">
            <label htmlFor="url" className="text-xs font-medium text-font-subtle">
              Design URL
            </label>
            <FaInfoCircle size={12} className="text-font-subtlest" />
          </div>
          <input
            id="url"
            type="text"
            value={SAMPLE_URL}
            readOnly
            className="w-full border border-border-input bg-black px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest focus:border-border-focused focus:outline-none focus:ring-0"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            className="flex-1 rounded py-2 text-xs font-medium text-font-inverse"
            style={{ backgroundColor: BUTTON_COLOR }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-2 text-xs font-medium text-font-inverse"
            style={{ backgroundColor: BUTTON_COLOR }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-border-input pt-4">
          <p className="text-xs font-medium text-font-subtle">Recent Breakdowns</p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 pt-3 text-center">
          <p className="text-xs text-font-subtle">© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};

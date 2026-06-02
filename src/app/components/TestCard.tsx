import { BsGear } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";

// Color palette for the UI Magician Agent card
const COLORS = {
  background: "#000000",
  primary: "#b5b5b5",
  secondary: "#b0b0b0",
  tertiary: "#b2b2b1",
  border: "#3a3a3a",
  inputBg: "#1a1a1a",
  buttonBg: "#a0613a",
  buttonText: "#8c8078",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-black p-6 text-font-subtlest"
      style={{ background: COLORS.background }}
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="font-primary-bold text-sm"
          style={{ color: COLORS.primary }}
        >
          UI magician Agent
        </h1>
        <button
          className="cursor-pointer rounded p-1 hover:bg-background-neutral"
          aria-label="Settings"
        >
          <BsGear size={16} style={{ color: COLORS.primary }} />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6 border-b border-background-neutral pb-4">
        <button
          className="flex items-center gap-2 font-primary-bold text-xs"
          style={{ color: COLORS.secondary }}
        >
          <HiChevronDown size={14} />
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <button
          className="font-primary-bold text-xs"
          style={{ color: COLORS.tertiary }}
        >
          ▼ Add New Design
        </button>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label
          className="mb-2 block font-primary-bold text-xs"
          style={{ color: COLORS.secondary }}
        >
          Personal Access Token
        </label>
        <input
          type="text"
          placeholder="Enter your token"
          className="w-full rounded border border-background-neutral bg-black px-3 py-2 text-xs text-font focus:outline-none"
          style={{
            color: COLORS.primary,
            borderColor: COLORS.border,
            backgroundColor: COLORS.inputBg,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label
          className="mb-2 block font-primary-bold text-xs"
          style={{ color: COLORS.secondary }}
        >
          Design URL
        </label>
        <input
          type="text"
          placeholder="https://figma.com/file/..."
          className="w-full rounded border border-background-neutral bg-black px-3 py-2 text-xs text-font focus:outline-none"
          style={{
            color: COLORS.primary,
            borderColor: COLORS.border,
            backgroundColor: COLORS.inputBg,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button
          className="rounded px-4 py-2 font-primary-bold text-xs transition hover:opacity-80"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="rounded px-4 py-2 font-primary-bold text-xs transition hover:opacity-80"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2
          className="font-primary-bold text-xs"
          style={{ color: COLORS.secondary }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

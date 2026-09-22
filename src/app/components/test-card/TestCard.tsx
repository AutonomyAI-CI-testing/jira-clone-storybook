import { RiSettings3Line, RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard — a static, self-contained recreation of the "UI magician Agent"
 * Figma panel. Built as a one-shot smoke test for the design-to-code
 * pipeline: no props, no state, no interactivity.
 *
 * NOTE: this repo's Tailwind config replaces the default color palette with
 * custom design tokens (font/icon/border/background/elevation) and does not
 * define a "neutral" or "orange" color scale, so those utility classes never
 * compile. Colors below use inline styles with hex values matching the
 * Figma reference instead.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded p-5 font-sans text-sm"
      style={{ backgroundColor: "#000000", color: "#a3a3a3" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#d4d4d4" }}
        >
          UI magician Agent
        </span>
        <RiSettings3Line className="h-4 w-4" style={{ color: "#a3a3a3" }} />
      </div>

      {/* Collapsible info row */}
      <div className="mt-6 flex items-center gap-2">
        <RiArrowUpSLine className="h-3 w-3" style={{ color: "#a3a3a3" }} />
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: "#a3a3a3" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <RiArrowUpSLine className="h-3 w-3" style={{ color: "#d4d4d4" }} />
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#d4d4d4" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1.5">
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "#a3a3a3" }}
          >
            Personal Access Token
          </span>
          <AiOutlineInfoCircle
            className="h-3 w-3"
            style={{ color: "#737373" }}
          />
        </div>
        <input
          disabled
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border px-3 py-2 text-[11.5px] font-semibold"
          style={{
            borderColor: "#737373",
            backgroundColor: "#262626",
            color: "#737373",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1.5">
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "#a3a3a3" }}
          >
            Design URL
          </span>
          <AiOutlineInfoCircle
            className="h-3 w-3"
            style={{ color: "#737373" }}
          />
        </div>
        <input
          disabled
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border px-3 py-2 text-[10.5px] font-semibold"
          style={{
            borderColor: "#737373",
            backgroundColor: "#262626",
            color: "#737373",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-2">
        <button
          disabled
          className="flex-1 rounded px-4 py-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#7c2d12", color: "#d4d4d4" }}
        >
          Awesome
        </button>
        <button
          disabled
          className="flex-1 rounded px-4 py-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#7c2d12", color: "#d4d4d4" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#d4d4d4" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

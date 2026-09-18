import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Static, self-contained smoke-test mock-up of a dark settings panel.
// Colors are inline because this repo's tailwind.config.js replaces the
// default Tailwind palette with semantic design tokens (no numeric
// neutral/orange scale exists to reach for here) — layout still uses
// Tailwind utility classes.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded p-3"
    style={{ backgroundColor: "#0a0a0a", color: "#d4d4d4" }}
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold" style={{ color: "#d4d4d4" }}>
        UI magician Agent
      </span>
      <FiSettings className="h-4 w-4" style={{ color: "#a3a3a3" }} />
    </div>

    {/* Collapsed helper row */}
    <div className="mt-3 flex items-center gap-2">
      <FiChevronUp className="h-3 w-3" style={{ color: "#737373" }} />
      <span className="text-xs" style={{ color: "#737373" }}>
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <FiChevronUp className="h-3 w-3" style={{ color: "#a3a3a3" }} />
        <span className="text-sm font-semibold" style={{ color: "#d4d4d4" }}>
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a3" }}>
            Personal Access Token
          </span>
          <FiInfo className="h-3 w-3" style={{ color: "#737373" }} />
        </div>
        <div
          className="mt-1.5 rounded px-3 py-2"
          style={{ backgroundColor: "#262626", border: "1px solid #a3a3a3" }}
        >
          <span className="text-xs" style={{ color: "#737373" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a3" }}>
            Design URL
          </span>
          <FiInfo className="h-3 w-3" style={{ color: "#737373" }} />
        </div>
        <div
          className="mt-1.5 rounded px-3 py-2"
          style={{ backgroundColor: "#262626", border: "2px solid #929291" }}
        >
          <span className="text-xs" style={{ color: "#737373" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <div
          className="rounded px-4 py-2 text-center text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#d4d4d4" }}
        >
          Awesome
        </div>
        <div
          className="rounded px-4 py-2 text-center text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#d4d4d4" }}
        >
          Prepare
        </div>
      </div>
    </div>

    {/* Recent Breakdowns section */}
    <div className="mt-8">
      <span className="text-sm font-semibold" style={{ color: "#d4d4d4" }}>
        Recent Breakdowns
      </span>
      <div className="mt-3 h-20" />
    </div>
  </div>
);

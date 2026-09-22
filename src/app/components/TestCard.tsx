import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded p-5 font-semibold"
      style={{ backgroundColor: "#1e1e1a", color: "#b5b5b5" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={18} style={{ color: "#8b9291" }} />
      </div>

      {/* Collapsible row 1 (collapsed) */}
      <div className="mt-5 flex items-center gap-2">
        <HiChevronUp size={14} style={{ color: "#8b9291" }} />
        <span className="truncate text-xs" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section 2 (expanded) */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <HiChevronUp size={14} style={{ color: "#b2b2b1" }} />
          <span className="text-sm" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-xs" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            <IoInformationCircleOutline size={13} style={{ color: "#a4a4a3" }} />
          </div>
          <div
            className="rounded border px-3 py-2.5 text-xs"
            style={{
              backgroundColor: "#272822",
              borderColor: "#a5adad",
              color: "#737470",
            }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-xs" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            <IoInformationCircleOutline size={13} style={{ color: "#a3a3a2" }} />
          </div>
          <div
            className="rounded border-2 px-3 py-2.5 text-xs"
            style={{
              backgroundColor: "#272822",
              borderColor: "#929291",
              color: "#71726e",
            }}
          >
            https://www.figma.com/file/:
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded px-4 py-2.5 text-xs"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded px-4 py-2.5 text-xs"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns (empty list state) */}
      <div className="mt-10">
        <span className="text-sm" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
        <div className="mt-4 h-10" />
      </div>
    </div>
  );
};

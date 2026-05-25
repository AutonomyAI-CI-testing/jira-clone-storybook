import { useState } from "react";
import cx from "classix";

// SVG icon component for reusable info icons
const InfoIcon = ({
  width = "15px",
  height = "15px",
}: {
  width?: string;
  height?: string;
} = {}): JSX.Element => (
  <svg
    style={{ height, width }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

// SVG icon component for collapsible section toggle
const CollapseIcon = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
  <svg
    className={cx("transition-transform", isOpen && "rotate-180")}
    style={{ height: "8px", width: "12px" }}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polyline points="1 1 6 6 11 1" />
  </svg>
);

// Button styling constants
const ACTION_BUTTON_CLASSES = cx(
  "flex-1 rounded-[4px] bg-[#843a17] px-6 py-3",
  "text-[11.5px] font-semibold text-[#8c8078]",
  "hover:bg-[#704a2a] active:bg-[#6a3d24]"
);

const TOKEN_INPUT_CLASSES = cx(
  "w-full border-2 border-[#929291] bg-[#272822]",
  "px-3 py-3 text-[11.5px] font-semibold text-[#737470]",
  "placeholder:text-[#737470] outline-none",
  "focus:border-[#b5b5b5]"
);

const URL_INPUT_CLASSES = cx(
  "w-full border-[1px] border-[#a5adad] bg-[#272822]",
  "px-3 py-3 text-[10.5px] font-semibold text-[#71726e]",
  "placeholder:text-[#71726e] outline-none",
  "focus:border-[#b5b5b5]"
);

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div className="min-h-screen p-5" style={{ backgroundColor: "#000000" }}>
      {/* Header Section */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <InfoIcon width="14px" height="16px" />
      </div>

      {/* First Collapsible Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          className="flex items-center gap-3 text-[11.5px] font-semibold text-[#8b9291] hover:opacity-75"
        >
          <CollapseIcon isOpen={isFirstSectionOpen} />
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddDesignOpen(!isAddDesignOpen)}
          className="flex items-center gap-3 text-[13.5px] font-semibold text-[#b2b2b1] hover:opacity-75"
        >
          <CollapseIcon isOpen={isAddDesignOpen} />
          Add New Design
        </button>

        {isAddDesignOpen && (
          <div className="mt-8 space-y-6">
            {/* Personal Access Token Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
               <input
                 type="text"
                 placeholder="figd_xxxxxxxxxxxxxxxxxx"
                 className={TOKEN_INPUT_CLASSES}
               />
            </div>

            {/* Design URL Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
                  Design URL
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className={URL_INPUT_CLASSES}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <button className={ACTION_BUTTON_CLASSES}>
                Awesome
              </button>
              <button className={ACTION_BUTTON_CLASSES}>
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-16">
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#d1d5db] pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#737470]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

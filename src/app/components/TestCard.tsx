import type { JSX } from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-black p-5">
      <div className="w-[254px]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <svg
            className="h-6 w-6 text-[#b5b5b5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            <path d="M12 8v1m0 6v1M8.5 12h1m6 0h1" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Collapsible Section 1 */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-[#b2b2b1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span className="text-[11.5px] font-semibold text-[#8b9291]">
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Add New Design Section */}
        <div className="mb-8 flex items-center gap-2">
          <svg
            className="h-4 w-4 text-[#b2b2b1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <svg
              className="h-4 w-4 text-[#a4a4a3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path d="M12 16v-4M12 8h.01" strokeWidth="1.5" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470]"
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <svg
              className="h-4 w-4 text-[#a3a3a2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path d="M12 16v-4M12 8h.01" strokeWidth="1.5" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <button className="flex-1 rounded bg-[#a0643b] px-4 py-3 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b0744b]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#a0643b] px-4 py-3 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b0744b]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div>
          <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

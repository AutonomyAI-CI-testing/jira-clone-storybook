import { useState } from "react";
import { FaCog, FaChevronUp, FaChevronDown, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  const [frameOpen, setFrameOpen] = useState(true);
  const [designOpen, setDesignOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-black p-5 font-sans text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <button
        type="button"
        onClick={() => setFrameOpen((prev) => !prev)}
        className="mt-3 flex items-center gap-2 text-left"
      >
        {frameOpen ? (
          <FaChevronUp className="h-2.5 w-2.5 text-[#8b9291]" />
        ) : (
          <FaChevronDown className="h-2.5 w-2.5 text-[#8b9291]" />
        )}
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </button>

      {/* Add New Design section */}
      <div className="mt-8">
        <button
          type="button"
          onClick={() => setDesignOpen((prev) => !prev)}
          className="flex items-center gap-2 text-left"
        >
          {designOpen ? (
            <FaChevronUp className="h-2.5 w-2.5 text-[#b2b2b1]" />
          ) : (
            <FaChevronDown className="h-2.5 w-2.5 text-[#b2b2b1]" />
          )}
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </button>

        {designOpen && (
          <div className="mt-4 flex flex-col gap-4">
            {/* Personal Access Token */}
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
                  Personal Access Token
                </span>
                <FaInfoCircle className="h-2.5 w-2.5 text-[#a4a4a3]" />
              </div>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                readOnly
                className="w-full rounded-none border border-[#a5adad] bg-[#272822] px-2.5 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
              />
            </div>

            {/* Design URL */}
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
                  Design URL
                </span>
                <FaInfoCircle className="h-2.5 w-2.5 text-[#a3a3a2]" />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                readOnly
                className="w-full rounded-none border-2 border-[#929291] bg-[#272822] px-2.5 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

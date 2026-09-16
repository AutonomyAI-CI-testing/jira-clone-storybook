import { useState } from "react";
import { HiOutlineCog } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

export const TestCard = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#000000] px-5 py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <button
        type="button"
        onClick={() => setIsInfoOpen((prev) => !prev)}
        className="mt-4 flex items-center gap-2 text-left"
      >
        {isInfoOpen ? (
          <RiArrowUpSLine className="h-4 w-4 text-[#8b9291]" />
        ) : (
          <RiArrowDownSLine className="h-4 w-4 text-[#8b9291]" />
        )}
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </button>

      {/* Add New Design section */}
      <div className="mt-8">
        <button
          type="button"
          onClick={() => setIsAddDesignOpen((prev) => !prev)}
          className="flex items-center gap-2 text-left"
        >
          {isAddDesignOpen ? (
            <RiArrowUpSLine className="h-4 w-4 text-[#b2b2b1]" />
          ) : (
            <RiArrowDownSLine className="h-4 w-4 text-[#b2b2b1]" />
          )}
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </button>

        {isAddDesignOpen && (
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <div className="mb-1.5 flex items-center gap-1.5">
                <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
                  Personal Access Token
                </span>
                <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a4a4a3]" />
              </div>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-1.5">
                <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
                  Design URL
                </span>
                <AiOutlineInfoCircle className="h-3.5 w-3.5 text-[#a3a3a2]" />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

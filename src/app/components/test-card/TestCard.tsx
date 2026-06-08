import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[254px] rounded bg-[#272822] p-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <AiOutlineSetting className="text-[16px] text-[#b5b5b5]" />
        </div>

        {/* Subtitle row */}
        <div className="mt-2 flex items-center gap-2">
          <HiChevronUp className="text-[10px] text-[#8b9291]" />
          <span className="text-xs text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer / gap */}
        <div className="mt-8">
          {/* Add New Design header */}
          <div className="flex items-center gap-2">
            <HiChevronUp className="text-[#b2b2b1]" />
            <span className="text-sm font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>

          {/* Personal Access Token field */}
          <div className="mt-4">
            <div className="mb-1 flex items-center gap-2">
              <label className="text-xs text-[#a4a4a3]">
                Personal Access Token
              </label>
              <HiInformationCircle className="text-[14px] text-[#a4a4a3]" />
            </div>
            <input
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#a5adad] bg-[#272822]
                         px-3 py-2 text-xs placeholder:text-[#737470]"
            />
          </div>

          {/* Design URL field */}
          <div className="mt-3">
            <div className="mb-1 flex items-center gap-2">
              <label className="text-xs text-[#a3a3a2]">Design URL</label>
              <HiInformationCircle className="text-[14px] text-[#a3a3a2]" />
            </div>
            <input
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-[#929291] bg-[#272822]
                         px-3 py-2 text-xs placeholder:text-[#71726e]"
            />
          </div>

          {/* Buttons row */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              className="w-[85px] rounded bg-[#843a17] px-6
                           py-2 text-xs font-semibold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              className="w-[85px] rounded bg-[#843a17] px-6
                           py-2 text-xs font-semibold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns footer */}
        <div className="mt-8">
          <span className="text-sm font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

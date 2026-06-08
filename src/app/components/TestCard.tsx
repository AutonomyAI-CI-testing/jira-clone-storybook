import React from "react";
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans mx-auto w-full max-w-sm rounded-lg bg-[#2a2a2a] p-4 shadow-lg"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <HiOutlineCog className="text-lg text-[#b5b5b5]" />
      </div>

      {/* Subtitle Row */}
      <div className="mt-2 flex items-center gap-2">
        <HiChevronUp className="text-lg text-[#8b9291]" />
        <p className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer Gap */}
      <div className="mt-8"></div>

      {/* Section Heading: Add New Design */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp className="text-lg text-[#c0c0c0]" />
        <h3 className="text-sm font-semibold text-[#c0c0c0]">Add New Design</h3>
      </div>

      {/* Personal Access Token Input Group */}
      <div className="mb-4">
        <label className="mb-2 flex items-center gap-1 text-xs font-semibold text-[#a4a4a3]">
          Personal Access Token
          <HiInformationCircle className="text-sm text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-xs text-[#b5b5b5] placeholder-[#737470]"
        />
      </div>

      {/* Design URL Input Group */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-1 text-xs font-semibold text-[#a4a4a3]">
          Design URL
          <HiInformationCircle className="text-sm text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#3a3a3a] px-3 py-2 text-xs text-[#b5b5b5] placeholder-[#737470]"
        />
      </div>

      {/* Button Row */}
      <div className="mb-8 flex justify-center gap-3">
        <button className="rounded-lg bg-[#a0522d] px-6 py-2 text-xs font-semibold text-[#e8c9b4]">
          Awesome
        </button>
        <button className="rounded-lg bg-[#a0522d] px-6 py-2 text-xs font-semibold text-[#e8c9b4]">
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <h3 className="text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

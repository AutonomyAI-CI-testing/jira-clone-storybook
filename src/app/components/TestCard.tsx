import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 rounded text-white w-full max-w-sm">
      {/* 1. Header row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-2xl" />
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-2 mb-6">
        <IoChevronUpOutline className="text-amber-500" />
        <span className="text-sm text-amber-500">From entire frame to a singl...</span>
      </div>

      {/* 4. "Add New Design" section */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUpOutline className="text-white" />
        <h3 className="text-lg font-semibold">Add New Design</h3>
      </div>

      {/* 5. Personal Access Token label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="pat" className="text-sm">Personal Access Token</label>
        <AiOutlineInfoCircle className="text-xs text-zinc-400" />
      </div>
      {/* 6. Dark bordered input */}
      <input
        type="text"
        id="pat"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-transparent border border-zinc-600 rounded px-3 py-2 w-full text-zinc-400 placeholder-zinc-500 mb-4"
      />

      {/* 7. Design URL label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="design-url" className="text-sm">Design URL</label>
        <AiOutlineInfoCircle className="text-xs text-zinc-400" />
      </div>
      {/* 8. Dark bordered input */}
      <input
        type="text"
        id="design-url"
        placeholder="https://www.figma.com/file/:"
        className="bg-transparent border border-zinc-600 rounded px-3 py-2 w-full text-zinc-400 placeholder-zinc-500 mb-6"
      />

      {/* 9. Two side-by-side buttons */}
      <div className="flex gap-3 mb-6">
        <button className="bg-[#c1651a] hover:bg-[#a0522d] text-white font-semibold px-5 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#c1651a] hover:bg-[#a0522d] text-white font-semibold px-5 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* 10. "Recent Breakdowns" section heading */}
      <div>
        <h3 className="text-lg font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
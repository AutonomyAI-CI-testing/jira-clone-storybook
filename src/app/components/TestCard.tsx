import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#282520] p-6 min-h-screen text-white">
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="text-white text-2xl" />
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-white" />
        <p className="italic text-[#a09080]">From entire frame to a singl...</p>
      </div>

      <div className="flex items-center gap-2 mb-4 mt-6">
        <FiChevronUp className="text-white" />
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-white">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-[#a09080]" />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1c19] border border-[#4a3f35] rounded p-2 text-white placeholder-[#a09080]"
        />
      </div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-white">Design URL</label>
          <AiOutlineInfoCircle className="text-[#a09080]" />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1c19] border border-[#4a3f35] rounded p-2 text-white placeholder-[#a09080]"
        />
      </div>
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-[#b85c38] rounded p-2 text-white font-bold">Awesome</button>
        <button className="flex-1 bg-[#b85c38] rounded p-2 text-white font-bold">Prepare</button>
      </div>
      <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};

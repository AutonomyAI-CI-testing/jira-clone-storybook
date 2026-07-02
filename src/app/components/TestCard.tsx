import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1e1e1e] font-[Inter] p-6">
      {/* Header Row */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[#b5b5b5] text-sm font-semibold">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 px-5 mt-3">
        <FiChevronUp className="text-[#8b9291]" />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* "Add New Design" Section Header */}
      <div className="flex items-center gap-2 px-5 mt-8">
        <FiChevronUp className="text-[#b2b2b1]" />
        <span className="text-[#b2b2b1] text-sm font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex items-center gap-2 px-5 mt-5">
        <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
        <AiOutlineInfoCircle className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mx-5 mt-1 w-[calc(100%-2.5rem)] bg-[#272822] border border-[#a5adad] px-3 py-2 text-xs text-[#737470] font-semibold placeholder:text-[#737470] outline-none"
      />

      {/* Design URL Field */}
      <div className="flex items-center gap-2 px-5 mt-4">
        <span className="text-[#a3a3a2] text-xs font-semibold">Design URL</span>
        <AiOutlineInfoCircle className="text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mx-5 mt-1 w-[calc(100%-2.5rem)] bg-[#272822] border-2 border-[#929291] px-3 py-2 text-xs text-[#71726e] font-semibold placeholder:text-[#71726e] outline-none"
      />

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center mt-6 px-5">
        <button className="bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold py-2 px-6">Awesome</button>
        <button className="bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold py-2 px-6">Prepare</button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div className="px-5 mt-10 text-[#b0b0b0] text-sm font-semibold">
        Recent Breakdowns
      </div>
    </div>
  );
};
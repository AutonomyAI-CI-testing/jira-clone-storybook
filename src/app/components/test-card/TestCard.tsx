import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div className="w-[254px] bg-[#2c2c2c] rounded-lg p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <AiOutlineSetting
          size={16}
          className="text-[#a9a9a9] cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* Collapsible Section */}
      <div className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
        <AiOutlineUp size={14} className="text-[#8fa896] flex-shrink-0" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <AiOutlineUp size={14} className="text-[#8fa896] flex-shrink-0" />
          <h3 className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle
              size={14}
              className="text-[#8fa896] cursor-help flex-shrink-0 transition-opacity"
            />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder-[#636360] focus:outline-none focus:border-[#5a5a5a]"
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <AiOutlineInfoCircle
              size={14}
              className="text-[#8fa896] cursor-help flex-shrink-0 transition-opacity"
            />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder-[#6d6d6d] focus:outline-none focus:border-[#5a5a5a]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          className="flex-1 bg-[#a0522d] hover:bg-[#8d4226] active:bg-[#7a3620] text-[#d4c9bf] text-[11.5px] font-semibold py-2 px-3 rounded border border-[#a0522d] transition-colors"
        >
          Awesome
        </button>
        <button
          className="flex-1 bg-[#a0522d] hover:bg-[#8d4226] active:bg-[#7a3620] text-[#d4c9bf] text-[11.5px] font-semibold py-2 px-3 rounded border border-[#a0522d] transition-colors"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="text-[11.5px] font-semibold text-[#b0b0b0] text-center">
        Recent Breakdowns
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-300 pt-3 mt-6 text-center text-[11.5px] text-[#b0b0b0]">
        © AutonomyAI
      </div>
    </div>
  );
};

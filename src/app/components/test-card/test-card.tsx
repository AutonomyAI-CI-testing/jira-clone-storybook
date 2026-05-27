import { useState } from "react";
import {
  FaChevronUp,
  FaCog,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-bold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="text-[#b5b5b5] hover:text-[#c0c0c0]">
          <FaCog size={16} />
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8">
        <button
          onClick={() => setIsFrameExpanded(!isFrameExpanded)}
          className="mb-3 flex items-center gap-2 text-[11.5px] font-bold text-[#8b9291] hover:text-[#9da29f]"
        >
          {isFrameExpanded ? (
            <FaChevronUp size={14} />
          ) : (
            <FaChevronDown size={14} />
          )}
          <span>From entire frame to a singl...</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsDesignExpanded(!isDesignExpanded)}
          className="flex items-center gap-2 text-[13.5px] font-bold text-[#b2b2b1] hover:text-[#bfbfbe]"
        >
          {isDesignExpanded ? (
            <FaChevronUp size={14} />
          ) : (
            <FaChevronDown size={14} />
          )}
          <span>Add New Design</span>
        </button>

        {isDesignExpanded && (
          <div className="mt-8 space-y-6">
            {/* Personal Access Token Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-bold text-[#a4a4a3]">
                  Personal Access Token
                </label>
                <button className="text-[#a4a4a3] hover:text-[#b5b5b5]">
                  <FaInfoCircle size={14} />
                </button>
              </div>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border border-[#333333] bg-black px-3 py-2 text-[11.5px] font-bold text-[#737470] placeholder-[#737470] focus-visible:outline-2 focus-visible:outline-[#8c8078]"
              />
            </div>

            {/* Design URL Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-bold text-[#a3a3a2]">
                  Design URL
                </label>
                <button className="text-[#a3a3a2] hover:text-[#b5b5b5]">
                  <FaInfoCircle size={14} />
                </button>
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border border-[#333333] bg-black px-3 py-2 text-[11.5px] font-bold text-[#71726e] placeholder-[#71726e] focus-visible:outline-2 focus-visible:outline-[#8c8078]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 rounded bg-[#a86d55] py-2 text-center text-[11.5px] font-bold text-[#f0e6d8] hover:bg-[#b87d65]">
                Awesome
              </button>
              <button className="flex-1 rounded bg-[#a86d55] py-2 text-center text-[11.5px] font-bold text-[#f0e6d8] hover:bg-[#b87d65]">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 text-[13.5px] font-bold text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};

import { useState } from "react";
import cx from "classix";
import { FaCog, FaInfoCircle, FaChevronUp, FaChevronDown } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-xs rounded-lg bg-black p-5">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <button className="p-1 text-[#b5b5b5] hover:text-white">
            <FaCog size={16} />
          </button>
        </div>

        {/* First Collapsible Section */}
        <div className="mb-8">
          <button
            onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
            className="mb-4 flex items-center gap-2 text-[#8b9291] hover:text-[#a0a0a0]"
          >
            {isFirstSectionOpen ? (
              <FaChevronUp size={12} />
            ) : (
              <FaChevronDown size={12} />
            )}
            <span className="text-[11.5px] font-semibold">
              From entire frame to a singl...
            </span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="mb-8">
          <button
            onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
            className="flex items-center gap-2 text-[#b2b2b1] hover:text-white"
          >
            {isAddNewDesignOpen ? (
              <FaChevronUp size={14} />
            ) : (
              <FaChevronDown size={14} />
            )}
            <span className="text-[13.5px] font-semibold">Add New Design</span>
          </button>
        </div>

        {/* Form Section (visible when expanded) */}
        {isAddNewDesignOpen && (
          <div className="space-y-6 pb-8">
            {/* Personal Access Token Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
                  Personal Access Token
                </label>
                <button className="text-[#a4a4a3] hover:text-white">
                  <FaInfoCircle size={12} />
                </button>
              </div>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border border-[#4a4a48] bg-[#1a1a1a] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:border-[#6a6a68] focus:outline-none"
              />
            </div>

            {/* Design URL Field */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
                  Design URL
                </label>
                <button className="text-[#a3a3a2] hover:text-white">
                  <FaInfoCircle size={12} />
                </button>
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border border-[#4a4a48] bg-[#1a1a1a] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:border-[#6a6a68] focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded-lg bg-[#a0563e] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b5693f] active:bg-[#8b4832] transition-colors">
                Awesome
              </button>
              <button className="flex-1 rounded-lg bg-[#a0563e] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b5693f] active:bg-[#8b4832] transition-colors">
                Prepare
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-[#2a2a2a] pt-8">
          <p className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </p>
        </div>
      </div>
    </div>
  );
};

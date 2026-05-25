import { useState } from "react";
import cx from "classix";
import { FaAtom, FaChevronUp, FaChevronDown, FaCircleInfo } from "react-icons/fa6";

export const TestCard = (): JSX.Element => {
  const [expandFirstSection, setExpandFirstSection] = useState(true);
  const [expandSecondSection, setExpandSecondSection] = useState(true);

  return (
    <div className="w-full max-w-[500px] bg-[#2b2b2b] p-8 text-white">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="text-lg text-[#b5b5b5] hover:text-[#ffffff]">
          <FaAtom size={20} />
        </button>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-16 space-y-4">
        <button
          onClick={() => setExpandFirstSection(!expandFirstSection)}
          className="flex items-center gap-3 text-sm font-semibold text-[#8b9291] hover:text-[#a3a3a3]"
        >
          {expandFirstSection ? (
            <FaChevronUp size={16} />
          ) : (
            <FaChevronDown size={16} />
          )}
          <span>From entire frame to a singl...</span>
        </button>
        {expandFirstSection && <div className="h-16 bg-[#3a3a3a]" />}
      </div>

      {/* Second Collapsible Section - Add New Design */}
      <div className="space-y-6">
        <button
          onClick={() => setExpandSecondSection(!expandSecondSection)}
          className="flex items-center gap-3 text-lg font-semibold text-[#b2b2b1] hover:text-[#ffffff]"
        >
          {expandSecondSection ? (
            <FaChevronUp size={18} />
          ) : (
            <FaChevronDown size={18} />
          )}
          <span>Add New Design</span>
        </button>

        {expandSecondSection && (
          <div className="space-y-8 pt-4">
            {/* Personal Access Token Field */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-base font-semibold text-[#a4a4a3]">
                  Personal Access Token
                </label>
                <FaCircleInfo size={16} className="text-[#737470]" />
              </div>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border-2 border-[#5a5a5a] bg-[#2b2b2b] px-4 py-3 text-sm font-semibold text-[#8a8a8a] placeholder-[#6a6a6a] outline-none"
              />
            </div>

            {/* Design URL Field */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-base font-semibold text-[#a3a3a2]">
                  Design URL
                </label>
                <FaCircleInfo size={16} className="text-[#737470]" />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border-2 border-[#5a5a5a] bg-[#2b2b2b] px-4 py-3 text-sm font-semibold text-[#8a8a8a] placeholder-[#6a6a6a] outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 pt-4">
              <button className="flex-1 rounded-lg bg-[#8c4a3a] px-6 py-3 text-base font-semibold text-[#c4a89f] hover:bg-[#9d5a48] active:bg-[#7b3f32]">
                Awesome
              </button>
              <button className="flex-1 rounded-lg bg-[#8c4a3a] px-6 py-3 text-base font-semibold text-[#c4a89f] hover:bg-[#9d5a48] active:bg-[#7b3f32]">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-[#5a5a5a] pt-3 text-center">
        <p className="text-sm text-[#9ca3af]">© AutonomyAI</p>
      </div>
    </div>
  );
};


import { FiChevronUp, FiSettings, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] p-5 bg-[#2a2a2a] flex flex-col">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </h2>
        <FiSettings className="text-[#8b9291]" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-[#8b9291]" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer */}
      <div className="my-4" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Label & Input */}
      <div className="flex items-center gap-1 mt-4">
        <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
          Personal Access Token
        </label>
        <FiInfo size={14} className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full border border-[#4a4a4a] bg-[#1e1e1e] rounded px-3 py-2 text-[#737470] text-[11.5px] placeholder:text-[#737470] mt-2"
      />

      {/* Design URL Label & Input */}
      <div className="flex items-center gap-1 mt-4">
        <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
          Design URL
        </label>
        <FiInfo size={14} className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="w-full border border-[#4a4a4a] bg-[#1e1e1e] rounded px-3 py-2 text-[#737470] text-[11.5px] placeholder:text-[#737470] mt-2"
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 rounded-lg py-2 bg-[#7a3e1a] text-[#8c8078] font-semibold text-[11.5px]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg py-2 bg-[#7a3e1a] text-[#8c8078] font-semibold text-[11.5px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <p className="mt-6 text-[#b0b0b0] font-semibold text-[13.5px]">
        Recent Breakdowns
      </p>
    </div>
  );
};

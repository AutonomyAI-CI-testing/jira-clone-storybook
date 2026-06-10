
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-[254px] flex flex-col gap-3 font-sans">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <FiSettings className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="flex-1 py-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1] text-sm" />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token label + input */}
      <div className="flex text-[#a4a4a3] text-[11.5px] font-semibold items-center gap-1">
        <span>Personal Access Token</span>
        <FiInfo className="text-xs" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-transparent border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#737470] outline-none"
      />

      {/* Design URL label + input */}
      <div className="flex text-[#a4a4a3] text-[11.5px] font-semibold items-center gap-1">
        <span>Design URL</span>
        <FiInfo className="text-xs" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="bg-transparent border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#737470] outline-none"
      />

      {/* Buttons row */}
      <div className="flex gap-3 justify-center mt-2">
        <button className="bg-[#b85c2a] text-[#8c8078] text-[11.5px] font-semibold px-4 py-2 rounded">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-[#8c8078] text-[11.5px] font-semibold px-4 py-2 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns header */}
      <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold mt-4">Recent Breakdowns</h3>
    </div>
  );
}

import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-lg p-5 w-[300px] flex flex-col gap-4 text-white">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold">UI magician Agent</span>
        <IoSettingsOutline size={20} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={20} />
        <span className="text-[#c47a45]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 pt-4">
        <IoChevronUp size={20} />
        <span className="font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="pat">Personal Access Token</label>
          <AiOutlineInfoCircle size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-[#1e1e1e] border border-[#444] rounded p-2 text-white"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="designUrl">Design URL</label>
          <AiOutlineInfoCircle size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-[#1e1e1e] border border-[#444] rounded p-2 text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-between pt-2">
        <button type="button" className="bg-[#b05a2f] rounded px-4 py-2 flex-grow">
          Awesome
        </button>
        <button type="button" className="bg-[#b05a2f] rounded px-4 py-2 flex-grow">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="font-bold pt-4">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;


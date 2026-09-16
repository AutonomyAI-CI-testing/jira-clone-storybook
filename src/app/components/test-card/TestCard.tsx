import { FiSettings } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#151512] p-3 font-sans"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={16} />
      </div>

      <div className="mb-6 flex items-center gap-2">
        <FaChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <FaChevronUp className="text-[#b2b2b1]" size={10} />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

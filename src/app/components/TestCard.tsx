import { FiChevronUp, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#1e1e1a] p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <label className="block text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </label>
        <input
          readOnly
          value=""
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-3 mt-1 w-full rounded-none border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />

        <label className="block text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </label>
        <input
          readOnly
          value=""
          placeholder="https://www.figma.com/file/:"
          className="mb-4 mt-1 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />

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

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;

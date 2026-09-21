import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#0d0d0c] p-5 font-sans text-[13.5px]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
        </div>
        <input
          disabled
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] outline-none"
          style={{ border: "2px solid #929291" }}
        />
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <input
          disabled
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] outline-none"
          style={{ border: "1px solid #a5adad" }}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          disabled
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          disabled
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

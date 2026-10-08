import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static, self-contained reproduction of the "UI magician Agent" Figma frame.
 * Takes no props and holds no state — every control is presentational.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-2 flex items-center gap-2">
        <FiChevronUp size={10} className="text-[#8b9291]" />
        <span className="text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <FiInfo size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-1 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-2xs text-[#737470] outline-none"
      />

      <div className="mt-4 flex items-center gap-2">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <FiInfo size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-1 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-2xs outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          className="h-9 w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;

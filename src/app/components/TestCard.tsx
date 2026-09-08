import { AiOutlineSetting, AiOutlineInfoCircle, AiOutlineUp } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] p-4 flex flex-col gap-3 font-semibold"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px]">UI magician Agent</span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <AiOutlineUp className="text-[#8b9291]" size={10} />
        <span className="text-[#8b9291] text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <AiOutlineUp className="text-[#b2b2b1]" size={12} />
        <span className="text-[#b2b2b1] text-[13.5px]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[#a4a4a3] text-[11.5px]">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" size={15} />
        </div>
        <input
          className="w-full bg-[#272822] border border-[#a5adad] text-[11.5px] font-semibold px-2 py-2 outline-none text-[#737470] placeholder:text-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{ fontFamily: "Inter, sans-serif" }}
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[#a4a4a3] text-[11.5px]">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" size={15} />
        </div>
        <input
          className="w-full bg-[#272822] border-2 border-[#929291] text-[10.5px] font-semibold px-2 py-2 outline-none text-[#71726e] placeholder:text-[#71726e]"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{ fontFamily: "Inter, sans-serif" }}
        />
      </div>

      {/* Button row */}
      <div className="flex gap-2">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] rounded px-4 py-2 font-semibold">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] rounded px-4 py-2 font-semibold">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="pt-2">
        <span className="text-[#b0b0b0] text-[13.5px]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-[Inter,sans-serif] text-[13.5px] font-semibold"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[#b5b5b5]">UI magician Agent</h1>
        <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <MdExpandLess size={14} className="text-[#8b9291]" aria-hidden />
        <span className="truncate text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[70px] flex items-center gap-3">
        <MdExpandLess size={16} className="text-[#b2b2b1]" aria-hidden />
        <h2 className="text-[#b2b2b1]">Add New Design</h2>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <MdInfoOutline size={15} className="text-[#a4a4a3]" aria-hidden />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <MdInfoOutline size={15} className="text-[#a3a3a2]" aria-hidden />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] text-[#71726e] outline-none placeholder:text-[10.5px] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-[18px] pl-[22px]">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-8 text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

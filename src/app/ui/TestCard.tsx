import { BsGear, BsInfoCircle, BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-black p-5 font-primary">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <BsGear size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-2">
        <BsChevronUp size={12} className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20">
        <div className="flex items-center gap-2">
          <BsChevronUp size={14} className="text-[#b2b2b1]" />
          <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <BsInfoCircle size={14} className="text-[#a4a4a3]" />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />

        <div className="mt-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <BsInfoCircle size={14} className="text-[#a3a3a2]" />
        </div>
        <input
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            className="rounded bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-14 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

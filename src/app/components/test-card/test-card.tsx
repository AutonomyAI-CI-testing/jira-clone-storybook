import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col p-5"
      style={{ backgroundColor: "#2a2824", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={18} color="#b5b5b5" />
      </div>

      {/* Subtitle */}
      <div className="mt-2 flex items-center gap-1">
        <BiChevronUp size={14} color="#8b9291" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-14" />

      {/* Add New Design header */}
      <div className="flex items-center gap-2">
        <BiChevronUp size={16} color="#b2b2b1" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Form */}
      <div className="mt-4 flex flex-col gap-3">
        {/* Personal Access Token */}
        <div>
          <div className="mb-1 flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={15} color="#a4a4a3" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={
              "h-[37px] w-full border border-[#a5adad] bg-[#272822]" +
              " px-2 text-[11.5px] font-semibold text-[#737470] outline-none"
            }
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-1 flex items-center gap-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <AiOutlineInfoCircle size={15} color="#a3a3a2" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className={
              "h-[37px] w-full border-2 border-[#929291] bg-[#272822]" +
              " px-2 text-[11.5px] font-semibold text-[#71726e] outline-none"
            }
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          className={
            "h-[37px] w-[85px] rounded bg-[#843a17]" +
            " text-[11.5px] font-semibold text-[#8c8078]"
          }
        >
          Awesome
        </button>
        <button
          className={
            "h-[37px] w-[85px] rounded bg-[#843a17]" +
            " text-[11.5px] font-semibold text-[#8c8078]"
          }
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

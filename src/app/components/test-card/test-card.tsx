import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

// Color palette for the dark-themed card
const COLORS = {
  background: "#2a2824",
  headerText: "#b5b5b5",
  headerIcon: "#b5b5b5",
  subtitleIcon: "#8b9291",
  subtitleText: "#8b9291",
  sectionIcon: "#b2b2b1",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelIcon: "#a4a4a3",
  inputBorder: "#a5adad",
  inputBackground: "#272822",
  inputText: "#737470",
  designUrlLabel: "#a3a3a2",
  designUrlIcon: "#a3a3a2",
  designUrlBorder: "#929291",
  designUrlText: "#71726e",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
};

// Button styling (both buttons share the same style)
const BUTTON_STYLE =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col p-5"
      style={{ backgroundColor: COLORS.background, fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={18} color={COLORS.headerIcon} />
      </div>

      {/* Subtitle */}
      <div className="mt-2 flex items-center gap-1">
        <BiChevronUp size={14} color={COLORS.subtitleIcon} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-14" />

      {/* Add New Design header */}
      <div className="flex items-center gap-2">
        <BiChevronUp size={16} color={COLORS.sectionIcon} />
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
            <AiOutlineInfoCircle size={15} color={COLORS.labelIcon} />
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
            <AiOutlineInfoCircle size={15} color={COLORS.designUrlIcon} />
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
        <button className={BUTTON_STYLE}>
          Awesome
        </button>
        <button className={BUTTON_STYLE}>
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

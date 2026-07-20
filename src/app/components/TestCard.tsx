import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  const cardBg = "#2a2a2a";
  const sectionBg = "#333333";
  const inputBg = "#3a3a3a";
  const inputBorder = "#5a5a5a";
  const btnColor = "#c0622a";
  const mutedText = "#a07850";

  return (
    <div id="testElem" style={{ backgroundColor: cardBg }} className="min-h-screen w-full">
      <div className="p-6 flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="font-primary-black text-xl text-white">
            UI magician Agent
          </span>
          <AiOutlineSetting size={24} color="#ffffff" />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2">
          <BsChevronUp size={14} color="#ffffff" />
          <span
            className="text-sm font-primary truncate"
            style={{ color: mutedText }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="h-6" />

        {/* Add New Design section */}
        <div
          className="rounded-lg px-4 py-3 flex items-center gap-3"
          style={{ backgroundColor: sectionBg }}
        >
          <BsChevronUp size={16} color="#ffffff" />
          <span className="font-primary-black text-lg text-white">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="font-primary text-sm text-white">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle size={18} color="#ffffff" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded px-3 py-3 text-sm font-primary text-white outline-none"
            style={{
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              caretColor: "transparent",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="font-primary text-sm text-white">
              Design URL
            </label>
            <AiOutlineInfoCircle size={18} color="#ffffff" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded px-3 py-3 text-sm font-primary text-white outline-none"
            style={{
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              caretColor: "transparent",
            }}
          />
        </div>

        {/* Button row */}
        <div className="flex gap-4 justify-center mt-2">
          <button
            className="flex-1 rounded-lg py-3 font-primary-bold text-base text-white"
            style={{ backgroundColor: btnColor }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg py-3 font-primary-bold text-base text-white"
            style={{ backgroundColor: btnColor }}
          >
            Prepare
          </button>
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Recent Breakdowns */}
        <span className="font-primary-black text-xl text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";

// Tailwind class constants for consistent styling
const CONTAINER_CLASSES = "w-[254px] bg-[#1e1e1e] px-5 py-5 font-sans";
const SPACER_CLASSES = "h-10";
const FLEX_ROW_CENTER = "flex items-center gap-2";
const FLEX_ROW_BETWEEN = "flex items-center justify-between";

// Typography constants
const HEADER_TEXT_CLASSES = "text-[13.5px] font-semibold leading-[16.34px]";
const LABEL_TEXT_CLASSES = "text-[11.5px] font-semibold leading-[13.92px]";

// Input field constants
const INPUT_CLASSES =
  "w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-3 text-[11.5px] font-semibold leading-[13.92px] outline-none";

// Button constants
const BUTTON_CLASSES =
  "flex-1 rounded-lg bg-[#a0522d] py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export function TestCard() {
  return (
    <div id="testElem" className={CONTAINER_CLASSES}>
      {/* Header with settings icon */}
      <div className={FLEX_ROW_BETWEEN}>
        <span className={`${HEADER_TEXT_CLASSES} text-[#b5b5b5]`}>
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={22} />
      </div>

      {/* Agent status subtitle */}
      <div className={`mt-3 ${FLEX_ROW_CENTER}`}>
        <span className={`${LABEL_TEXT_CLASSES} text-[#8b9291]`}>^</span>
        <span className={`${LABEL_TEXT_CLASSES} text-[#8b9291]`}>
          From entire frame to a singl...
        </span>
      </div>

      <div className={SPACER_CLASSES} />

      {/* Section header */}
      <div className={FLEX_ROW_CENTER}>
        <span className={`${HEADER_TEXT_CLASSES} text-[#b2b2b1]`}>^</span>
        <span className={`${HEADER_TEXT_CLASSES} text-[#b2b2b1]`}>
          Add New Design
        </span>
      </div>

      {/* Input fields */}
      <div className="mt-5">
        <div className={`mb-2 ${FLEX_ROW_CENTER}`}>
          <span className={`${LABEL_TEXT_CLASSES} text-[#a4a4a3]`}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={`${INPUT_CLASSES} text-[#737470] placeholder-[#737470]`}
        />
      </div>

      <div className="mt-4">
        <div className={`mb-2 ${FLEX_ROW_CENTER}`}>
          <span className={`${LABEL_TEXT_CLASSES} text-[#a3a3a2]`}>
            Design URL
          </span>
          <AiOutlineInfoCircle className="text-[#a3a3a2]" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`${INPUT_CLASSES} text-[#71726e] placeholder-[#71726e]`}
        />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button className={BUTTON_CLASSES}>Awesome</button>
        <button className={BUTTON_CLASSES}>Prepare</button>
      </div>

      <div className={SPACER_CLASSES} />

      {/* Recent items section header */}
      <div>
        <span className={`${HEADER_TEXT_CLASSES} text-[#b0b0b0]`}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

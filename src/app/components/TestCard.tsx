import { FaAngleUp, FaCog, FaInfoCircle } from "react-icons/fa";

// The card reproduces the "UI magician Agent" Figma frame. It is deliberately
// self-contained — no props, no state — and wears the frame's own colours instead of the
// app's theme tokens, because the frame is a dark panel that sits outside the theme layer.
const TITLE_TEXT = "text-[13.5px] font-semibold leading-[16.34px]";
const LABEL_TEXT = "text-[11.5px] font-semibold leading-[13.92px]";
const FIELD_BOX =
  "flex w-[211px] items-center bg-[#272822] px-[18px] text-[#737470]";
const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black p-5 font-[Inter,ui-sans-serif,system-ui,sans-serif]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className={`${TITLE_TEXT} text-[#b5b5b5]`}>UI magician Agent</span>
      <FaCog aria-hidden="true" size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed frame summary */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <FaAngleUp aria-hidden="true" size={10} className="text-[#8b9291]" />
      <span className={`${LABEL_TEXT} text-[#8b9291]`}>
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[5px]">
      <FaAngleUp aria-hidden="true" size={14} className="text-[#b2b2b1]" />
      <span className={`${TITLE_TEXT} text-[#b2b2b1]`}>Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-[20px]">
      <span className={`${LABEL_TEXT} text-[#a4a4a3]`}>
        Personal Access Token
      </span>
      <FaInfoCircle aria-hidden="true" size={15} className="text-[#a4a4a3]" />
    </div>
    <div className={`mt-3 h-9 border border-[#a5adad] ${FIELD_BOX}`}>
      <span className={LABEL_TEXT}>figd_xxxxxxxxxxxxxxxxxx</span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[20px]">
      <span className={`${LABEL_TEXT} text-[#a3a3a2]`}>Design URL</span>
      <FaInfoCircle aria-hidden="true" size={15} className="text-[#a3a3a2]" />
    </div>
    <div className={`mt-[11px] h-[37px] border-2 border-[#929291] ${FIELD_BOX}`}>
      <span className="text-[10.5px] font-semibold leading-[12.71px]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-4">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className={`mt-[46px] ${TITLE_TEXT} text-[#b0b0b0]`}>
      Recent Breakdowns
    </div>
  </div>
);

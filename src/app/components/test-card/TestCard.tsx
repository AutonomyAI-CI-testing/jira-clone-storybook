import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * (Test Page - Simple, node 2-2).
 *
 * Colours are the frame's own hexes as Tailwind arbitrary values: none of them
 * has a repo token within range (the nearest are visibly different shades), and
 * the frame is the spec here. Type sizes and spacing approximate onto the repo's
 * existing steps.
 *
 * Self-contained on purpose: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="mt-0.5 text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <MdKeyboardArrowUp
          size={16}
          className="text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-4">
        <span className="font-primary-bold text-2xs text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-2xs text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-4">
        <span className="font-primary-bold text-2xs text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-2xs text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;

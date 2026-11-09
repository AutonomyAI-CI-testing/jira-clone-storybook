import { HiChevronUp } from "react-icons/hi";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

/**
 * Static, self-contained card reproducing the "UI magician Agent" panel from the
 * attached Figma frame. Takes no props and holds no state.
 *
 * The frame's own palette has no counterpart in this app's semantic token set, so
 * its colours are written as arbitrary values rather than mapped onto roles.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <IoSettingsOutline size={16} aria-label="Settings" role="img" />
    </div>

    {/* Collapsible row */}
    <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] text-[#8b9291]">
      <HiChevronUp size={8} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
      <HiChevronUp size={12} aria-hidden="true" />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <label
      htmlFor="testcard-token"
      className="mt-[28px] flex items-center justify-between text-[11.5px] text-[#a4a4a3]"
    >
      <span>Personal Access Token</span>
      <IoInformationCircleOutline size={15} aria-hidden="true" />
    </label>
    <input
      id="testcard-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[color:#a5adad] bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <label
      htmlFor="testcard-url"
      className="mt-[11px] flex items-center gap-[12px] text-[11.5px] text-[#a3a3a2]"
    >
      <span>Design URL</span>
      <IoInformationCircleOutline size={15} aria-hidden="true" />
    </label>
    <input
      id="testcard-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[color:#929291] bg-[#272822] pl-[20px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;

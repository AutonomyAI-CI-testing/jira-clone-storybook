import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const FIELD_BASE = "flex h-9 w-full items-center bg-[#272822] px-4";
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#131313] p-5 font-primary-bold"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <MdSettings className="text-[#b5b5b5]" size={16} aria-hidden="true" />
    </div>

    {/* Collapsed section summary */}
    <div className="mt-3 flex items-center gap-2">
      <MdKeyboardArrowUp
        className="text-[#8b9291]"
        size={14}
        aria-hidden="true"
      />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[75px] flex items-center gap-2">
      <MdKeyboardArrowUp
        className="text-[#b2b2b1]"
        size={18}
        aria-hidden="true"
      />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal access token */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          className="text-[#a4a4a3]"
          size={15}
          aria-hidden="true"
        />
      </div>
      <div
        className={`mt-2 border border-[#a5adad] text-[11.5px] text-[#737470] ${FIELD_BASE}`}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <HiOutlineInformationCircle
          className="text-[#a3a3a2]"
          size={15}
          aria-hidden="true"
        />
      </div>
      <div
        className={`mt-2 border-2 border-[#929291] text-[10.5px] text-[#71726e] ${FIELD_BASE}`}
      >
        https://www.figma.com/file/:
      </div>
    </div>

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    {/* Recent breakdowns */}
    <div className="mt-12 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);

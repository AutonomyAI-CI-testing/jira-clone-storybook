import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * Smoke-test component: a fixed dark panel taken from a Figma frame.
 *
 * Self-contained by design — no props, no state, no handlers. The panel is a
 * theme-independent surface, so its colours are literal values from the frame
 * rather than the app's semantic colour roles (which resolve to light surfaces
 * and re-skin per theme).
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <HiOutlineCog6Tooth size={16} aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={10} aria-hidden="true" />
        <span className="truncate font-primary-bold text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <HiChevronUp size={12} aria-hidden="true" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-4">
          <span className="font-primary-bold text-2xs text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a4a4a3]"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-5">
          <span className="truncate font-primary-bold text-2xs text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-4">
          <span className="font-primary-bold text-2xs text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a3a3a2]"
            aria-hidden="true"
          />
        </div>
        <div className="mt-2 flex h-9 items-center border-2 border-[#929291] bg-[#272822] px-5">
          <span className="truncate font-primary-bold text-2xs text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      <div className="mt-6 flex gap-[17px] pl-6">
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

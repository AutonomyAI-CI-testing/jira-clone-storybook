import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Self-contained reproduction of the attached Figma frame ("UI magician Agent"
 * panel). Deliberately prop-less and stateless: it exists to show the design as
 * a component. Colours are taken from the frame as arbitrary values because the
 * panel is a fixed dark surface whose palette has no role in the theme set.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#232323] px-5 pt-5 pb-12 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-sm">UI magician Agent</span>
        <HiOutlineCog size={16} aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={12} aria-hidden />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <HiChevronUp size={12} aria-hidden />
        <span className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <HiOutlineInformationCircle size={15} aria-hidden />
      </div>
      <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-3 text-xs text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#a3a3a2]">
        <span>Design URL</span>
        <HiOutlineInformationCircle size={15} aria-hidden />
      </div>
      <div className="mt-3 flex h-9 w-full items-center border-2 border-[#929291] bg-[#272822] px-3 text-2xs text-[#71726e]">
        https://www.figma.com/file/
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="h-9 w-[85px] bg-[#843a17] font-primary-bold text-xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 w-[85px] bg-[#843a17] font-primary-bold text-xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 font-primary-bold text-sm text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}

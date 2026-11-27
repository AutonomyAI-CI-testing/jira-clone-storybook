import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

// Standalone smoke-test card: a fixed reproduction of an external Figma frame.
// It takes no props, reads no app state and is not wired into any route.
// The frame's greys and orange are literals on purpose — they belong to a
// foreign dark design and have no counterpart in this app's token contract.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-6 pb-10 pt-9 text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <MdSettings size={22} />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <MdKeyboardArrowUp size={20} className="shrink-0" />
      <span className="truncate font-primary text-base text-[#d8d8d8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[140px]" />

    <div className="flex items-center gap-3">
      <MdKeyboardArrowUp size={24} className="shrink-0" />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-8 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[15px]">Personal Access Token</span>
        <MdInfoOutline size={18} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="h-[52px] w-full rounded-md border border-[#8a8a8a] bg-[#2b2b2b] px-4 font-primary text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[15px]">Design URL</span>
        <MdInfoOutline size={18} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="h-[52px] w-full rounded-md border border-[#8a8a8a] bg-[#2b2b2b] px-4 font-primary text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-10 flex justify-center gap-9">
      <button
        type="button"
        className="h-[56px] w-[172px] rounded-md bg-[#b3581c] font-primary text-base text-[#d9d9d9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[56px] w-[172px] rounded-md bg-[#b3581c] font-primary text-base text-[#d9d9d9]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-auto pt-10">
      <span className="font-primary-bold text-xl text-[#8a8a8a]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

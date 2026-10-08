import { MdInfoOutline, MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</h1>
      <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-xs font-semibold text-[#8b9291]">
      <RiArrowUpSLine size={16} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-16 flex items-center gap-2 text-sm font-semibold text-[#b2b2b1]">
      <RiArrowUpSLine size={16} aria-hidden="true" />
      Add New Design
    </h2>

    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="personal-access-token"
        className="text-xs font-semibold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <MdInfoOutline size={15} className="text-[#a4a4a3]" aria-hidden="true" />
    </div>
    <input
      id="personal-access-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-2.5 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-xs font-semibold text-[#b5b5b5] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="design-url"
        className="text-xs font-semibold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <MdInfoOutline size={15} className="text-[#a3a3a2]" aria-hidden="true" />
    </div>
    <input
      id="design-url"
      placeholder="https://www.figma.com/file/"
      className="mt-2.5 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-xs font-semibold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="h-[37px] flex-1 rounded bg-[#843a17] text-xs font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] flex-1 rounded bg-[#843a17] text-xs font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-sm font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

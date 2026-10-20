import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#0f0f0f] px-[34px] py-[30px] font-primary text-[#d5d5d5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[18px]">UI magician Agent</span>
      <FiSettings aria-hidden size={22} />
    </div>

    <div className="mt-[26px] flex items-center gap-2 text-[#9a9a9a]">
      <FiChevronUp aria-hidden size={18} className="shrink-0" />
      <span className="min-w-0 truncate text-[15px]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[104px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={20} className="shrink-0" />
      <span className="font-primary-bold text-[20px]">Add New Design</span>
    </div>

    <div className="mt-[34px] flex items-center gap-2">
      <label htmlFor="testElem-token" className="text-[15px]">
        Personal Access Token
      </label>
      <FiInfo aria-hidden size={18} className="text-[#9a9a9a]" />
    </div>
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 w-full rounded-[2px] border border-[#d0d0d0] bg-[#242424] px-3 py-[18px] text-[15px] text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />

    <div className="mt-[22px] flex items-center gap-2">
      <label htmlFor="testElem-url" className="text-[15px]">
        Design URL
      </label>
      <FiInfo aria-hidden size={18} className="text-[#9a9a9a]" />
    </div>
    <input
      id="testElem-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-3 w-full rounded-[2px] border border-[#d0d0d0] bg-[#242424] px-3 py-[18px] text-[15px] text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />

    <div className="mt-[34px] flex items-center gap-8 pl-[54px]">
      <button
        type="button"
        className="rounded-lg bg-[#8f3a1e] px-7 py-3.5 text-[17px] text-[#cfcfcf]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-lg bg-[#8f3a1e] px-7 py-3.5 text-[17px] text-[#cfcfcf]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[104px]">
      <span className="font-primary-bold text-[20px]">Recent Breakdowns</span>
    </div>
  </div>
);

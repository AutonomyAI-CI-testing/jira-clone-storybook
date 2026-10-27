import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] leading-7 text-[#c8c8c8]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#c8c8c8] hover:text-white"
      >
        <FiSettings size={26} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-[16px] leading-6 text-[#cfcfcf]">
      <FiChevronUp size={22} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-28 flex items-center gap-3 font-primary-bold text-[22px] leading-8 text-[#d0d0d0]">
      <FiChevronUp size={24} className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-10 flex items-center gap-6 text-[17px] leading-6 text-[#c9c9c9]">
      <label htmlFor="personal-access-token">Personal Access Token</label>
      <FiInfo size={22} className="shrink-0" />
    </div>
    <input
      id="personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[68px] w-full rounded-sm border border-[#8a8a8a] bg-[#2b2b2b] px-6 text-[19px] text-[#d4d4d4] outline-none placeholder:text-[#8f8f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
    />

    <div className="mt-10 flex items-center gap-6 text-[17px] leading-6 text-[#c9c9c9]">
      <label htmlFor="design-url">Design URL</label>
      <FiInfo size={22} className="shrink-0" />
    </div>
    <input
      id="design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[68px] w-full rounded-sm border border-[#8a8a8a] bg-[#2b2b2b] px-6 text-[19px] text-[#d4d4d4] outline-none placeholder:text-[#8f8f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
    />

    <div className="mt-8 flex justify-end gap-8">
      <button
        type="button"
        className="h-[64px] w-[170px] rounded-md bg-[#a0431c] text-[19px] text-[#c9c2bd] hover:bg-[#8f3a17]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[64px] w-[170px] rounded-md bg-[#a0431c] text-[19px] text-[#c9c2bd] hover:bg-[#8f3a17]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[22px] leading-8 text-[#d0d0d0]">
      Recent Breakdowns
    </h2>
  </div>
);

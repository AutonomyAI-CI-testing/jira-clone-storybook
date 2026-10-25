import { HiChevronUp, HiCog, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[#1c1c1c] px-6 py-8 font-primary text-[#e5e5e5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[22px] text-[#f5f5f5]">
        UI magician Agent
      </h1>
      <HiCog size={22} className="text-[#f5f5f5]" aria-hidden="true" />
    </div>

    <div className="mt-7 flex items-center gap-2 pl-2">
      <HiChevronUp size={18} className="text-[#a3a3a3]" aria-hidden="true" />
      <span className="truncate font-primary-light text-[15px] text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiChevronUp size={20} className="text-[#f5f5f5]" aria-hidden="true" />
      <h2 className="font-primary-black text-[19px] text-[#f5f5f5]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-2">
        <span className="font-primary text-[15px] text-[#e5e5e5]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={16}
          className="text-[#c9c9c9]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded-md border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-3 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="font-primary text-[15px] text-[#e5e5e5]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={16}
          className="text-[#c9c9c9]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded-md border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-3 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-9 flex gap-9 pl-12">
      <button
        type="button"
        className="h-[62px] w-[170px] rounded-md bg-[#9c4318] font-primary text-[18px] text-[#e8a87c]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] w-[170px] rounded-md bg-[#9c4318] font-primary text-[18px] text-[#e8a87c]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-black text-[19px] text-[#f5f5f5]">
      Recent Breakdowns
    </h2>
  </div>
);

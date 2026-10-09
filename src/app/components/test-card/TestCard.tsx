import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 py-8 font-primary text-[#e5e5e5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[17px] text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <HiOutlineCog size={22} className="text-[#c9c9c9]" aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#b3b3b3]">
      <HiChevronUp size={18} aria-hidden="true" />
      <span className="truncate text-[15px]">From entire frame to a singl…</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp size={20} className="text-[#e0e0e0]" aria-hidden="true" />
      <span className="font-primary-bold text-[17px] text-[#eaeaea]">
        Add New Design
      </span>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="figma-token" className="text-[15px] text-[#b9b9b9]">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          size={16}
          className="text-[#8f8f8f]"
          aria-hidden="true"
        />
      </div>
      <input
        id="figma-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded-[3px] border border-[#4a4a4a] bg-[#242424] px-3 py-3 text-[15px] text-[#e5e5e5] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className="text-[15px] text-[#b9b9b9]">
          Design URL
        </label>
        <HiOutlineInformationCircle
          size={16}
          className="text-[#8f8f8f]"
          aria-hidden="true"
        />
      </div>
      <input
        id="design-url"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded-[3px] border border-[#4a4a4a] bg-[#242424] px-3 py-3 text-[15px] text-[#e5e5e5] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-8 flex gap-8">
      <button
        type="button"
        className="rounded-md bg-[#a5471e] px-8 py-3 text-[15px] text-[#e7d5cb]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-md bg-[#a5471e] px-8 py-3 text-[15px] text-[#e7d5cb]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[17px] text-[#dcdcdc]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

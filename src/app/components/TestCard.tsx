import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 py-12 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[26px] text-[#d9d9d9]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden="true" size={30} className="text-[#c4c4c4]" />
    </div>

    <div className="mt-7 flex items-center gap-4 text-[#9a9a9a]">
      <FiChevronUp aria-hidden="true" size={24} className="shrink-0" />
      <span className="truncate text-[20px]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="h-[150px]" />

    <div className="flex items-center gap-4">
      <FiChevronUp aria-hidden="true" size={26} className="shrink-0" />
      <h2 className="font-primary-black text-[28px]">Add New Design</h2>
    </div>

    <div className="mt-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-[20px]">
          Personal Access Token
        </label>
        <FiInfo aria-hidden="true" size={22} className="text-[#c4c4c4]" />
      </div>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="h-[62px] rounded-[2px] border border-[#565656] bg-transparent px-4 text-[20px] text-[#d9d9d9] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-8 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-[20px]">
          Design URL
        </label>
        <FiInfo aria-hidden="true" size={22} className="text-[#c4c4c4]" />
      </div>
      <input
        id="test-card-url"
        placeholder="https://www.figma.com/file/"
        className="h-[62px] rounded-[2px] border border-[#565656] bg-transparent px-4 text-[20px] text-[#d9d9d9] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-10 flex gap-9">
      <button
        type="button"
        className="flex-1 rounded-[10px] bg-[#b3491f] px-6 py-5 text-[20px] text-[#e08a5f]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-[10px] bg-[#b3491f] px-6 py-5 text-[20px] text-[#e08a5f]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-[28px]">Recent Breakdowns</h2>
  </div>
);

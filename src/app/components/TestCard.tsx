import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 pb-10 pt-10 font-primary-light text-[#e0e0e0]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[28px] leading-none text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center rounded text-[#d0d0d0] hover:text-[#ffffff]"
        >
          <IoSettingsOutline aria-hidden className="h-8 w-8" />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[#9e9e9e]">
        <IoChevronUp aria-hidden className="h-6 w-6 shrink-0" />
        <span className="truncate text-[18px]">
          From entire frame to a singl...
        </span>
      </div>

      <div aria-hidden className="h-[150px]" />

      <div className="flex items-center gap-2">
        <IoChevronUp aria-hidden className="h-7 w-7 shrink-0" />
        <h2 className="font-primary-bold text-[24px] leading-none text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-token"
            className="text-[17px] text-[#bdbdbd]"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            aria-hidden
            className="h-6 w-6 text-[#c9c9c9]"
          />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-6 h-[70px] w-full rounded-[2px] border border-[#8f8f8f] bg-[#2b2b2b] px-10 text-[18px] text-[#e0e0e0] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className="text-[17px] text-[#bdbdbd]">
            Design URL
          </label>
          <IoInformationCircleOutline
            aria-hidden
            className="h-6 w-6 text-[#c9c9c9]"
          />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-6 h-[70px] w-full rounded-[2px] border border-[#8f8f8f] bg-[#2b2b2b] px-10 text-[18px] text-[#e0e0e0] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-9">
        <button
          type="button"
          className="flex h-[74px] cursor-pointer items-center justify-center rounded-lg bg-[#a04a1e] font-primary text-[20px] text-[#e6e6e6]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[74px] cursor-pointer items-center justify-center rounded-lg bg-[#a04a1e] font-primary text-[20px] text-[#e6e6e6]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[24px] leading-none text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

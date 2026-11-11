import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pb-32 pt-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[17px] leading-6">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#c9c9c9]"
      >
        <FiSettings className="h-6 w-6" />
      </button>
    </div>

    <button
      type="button"
      className="mt-10 flex w-full cursor-pointer items-center gap-3 text-left"
    >
      <FiChevronUp className="h-5 w-5 shrink-0 text-[#c9c9c9]" />
      <span className="min-w-0 truncate text-xs text-[#9aa0a6]">
        From entire frame to a single component
      </span>
    </button>

    <section className="mt-40">
      <h2 className="flex items-center gap-3 font-primary-bold text-[16px] leading-6">
        <FiChevronUp className="h-5 w-5 shrink-0" />
        Add New Design
      </h2>

      <div className="mt-16">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="text-[15px] text-[#c9c9c9]"
          >
            Personal Access Token
          </label>
          <FiInfo
            className="h-5 w-5 shrink-0 text-[#c9c9c9]"
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-8 h-[57px] w-full rounded border border-[#4a4a4a] bg-[#262626] px-5 text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-url" className="text-[15px] text-[#c9c9c9]">
            Design URL
          </label>
          <FiInfo
            className="h-5 w-5 shrink-0 text-[#c9c9c9]"
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file:"
          className="mt-8 h-[57px] w-full rounded border border-[#4a4a4a] bg-[#262626] px-5 text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-16 flex justify-center gap-8">
        <button
          type="button"
          className="h-[68px] w-[170px] cursor-pointer rounded-md bg-[#a34a2a] text-[17px] text-[#bda99e]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[68px] w-[170px] cursor-pointer rounded-md bg-[#a34a2a] text-[17px] text-[#bda99e]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-24 font-primary-bold text-[17px] leading-6">
      Recent Breakdowns
    </h2>
  </div>
);

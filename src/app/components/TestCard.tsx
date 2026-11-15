import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

/**
 * Throwaway smoke-test component: a static reproduction of the "UI magician
 * Agent" Figma panel. Self-contained, takes no props, renders no state.
 * Palette and metrics are approximations read from the design image.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 pb-14 pt-10 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[21px] leading-none">
          UI magician Agent
        </h2>
        <HiCog
          size={26}
          className="shrink-0 text-[#b3b3b3]"
          role="img"
          aria-label="Settings"
        />
      </div>

      <div className="mt-9 flex items-center gap-3 text-[#9e9e9e]">
        <HiChevronUp size={22} className="shrink-0" aria-hidden />
        <span className="truncate text-[17px]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[120px] flex items-center gap-3">
        <HiChevronUp size={28} className="shrink-0" aria-hidden />
        <h3 className="font-primary-bold text-[20px] leading-none">
          Add New Design
        </h3>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between">
          <label htmlFor="testcard-token" className="text-[17px] text-[#d0d0d0]">
            Personal Access Token
          </label>
          <HiInformationCircle
            size={24}
            className="shrink-0 text-[#b3b3b3]"
            aria-hidden
          />
        </div>
        <input
          id="testcard-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-6 h-[56px] w-full rounded-md border border-[#4a4a4a] bg-[#2a2a2a] px-4 text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <label htmlFor="testcard-url" className="text-[17px] text-[#d0d0d0]">
            Design URL
          </label>
          <HiInformationCircle
            size={24}
            className="shrink-0 text-[#b3b3b3]"
            aria-hidden
          />
        </div>
        <input
          id="testcard-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-6 h-[56px] w-full rounded-md border border-[#4a4a4a] bg-[#2a2a2a] px-4 text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-12 flex gap-8">
        <button
          type="button"
          className="h-[56px] flex-1 rounded-md bg-[#a03c11] text-[17px] text-[#e8e8e8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[56px] flex-1 rounded-md bg-[#a03c11] text-[17px] text-[#e8e8e8]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-bold text-[20px] leading-none">
        Recent Breakdowns
      </h3>
    </div>
  );
};

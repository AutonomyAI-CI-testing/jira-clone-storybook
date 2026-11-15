import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a self-contained reproduction of the shared Figma
 * panel. It takes no props, holds no state and is not wired into any route.
 * Colours and sizes are read off the design and are approximate.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1d1d1d] font-primary text-[#c9c9c9]"
    >
      {/* Title strip */}
      <div className="bg-[#151515] px-10 pb-7 pt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-primary-black text-[20px] text-[#d6d6d6]">
            UI magician Agent
          </h2>
          <FiSettings size={22} className="text-[#b9b9b9]" aria-hidden />
        </div>

        <div className="mt-7 flex items-center gap-3">
          <FiChevronUp size={20} className="shrink-0" aria-hidden />
          <span className="truncate text-[16px]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-10 pb-16 pt-[130px]">
        <div className="flex items-center gap-3">
          <FiChevronUp size={22} className="shrink-0 text-[#d6d6d6]" aria-hidden />
          <h3 className="font-primary-black text-[22px] text-[#d6d6d6]">
            Add New Design
          </h3>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-5">
            <label htmlFor="testcard-token" className="text-[16px]">
              Personal Access Token
            </label>
            <FiInfo size={16} className="shrink-0" aria-hidden />
          </div>
          <input
            id="testcard-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="mt-3 w-full rounded-[2px] border border-[#6b6b6b] bg-[#242424] px-4 py-3 text-[16px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
          />
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-5">
            <label htmlFor="testcard-url" className="text-[16px]">
              Design URL
            </label>
            <FiInfo size={16} className="shrink-0" aria-hidden />
          </div>
          <input
            id="testcard-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="mt-3 w-full rounded-[2px] border border-[#6b6b6b] bg-[#242424] px-4 py-3 text-[16px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
          />
        </div>

        <div className="mt-8 flex gap-6">
          <button
            type="button"
            className="rounded-[8px] bg-[#a8481c] px-9 py-3.5 text-[17px] text-[#cfcac6]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-[8px] bg-[#a8481c] px-9 py-3.5 text-[17px] text-[#cfcac6]"
          >
            Prepare
          </button>
        </div>

        <h3 className="mt-[110px] font-primary-black text-[20px] text-[#d6d6d6]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

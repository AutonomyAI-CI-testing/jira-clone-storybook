import { FiChevronUp, FiSettings } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-[#0f0f0f] px-10 py-10 font-primary text-[#e6e6e6]"
  >
    <div className="mx-auto w-full max-w-[508px]">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-[22px] text-[#d6d6d6]">
          UI magician Agent
        </h1>
        <FiSettings className="text-2xl text-[#b5b5b5]" aria-hidden="true" />
      </div>

      <div className="mt-10 flex items-center gap-3 text-[16px] text-[#9a9a9a]">
        <FiChevronUp className="shrink-0 text-base" aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <FiChevronUp className="shrink-0 text-lg" aria-hidden="true" />
        <h2 className="font-primary-black text-[24px]">Add New Design</h2>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-pat" className="text-[16px] text-[#cfcfcf]">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            className="shrink-0 text-base text-[#a8a8a8]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 h-11 w-full rounded-sm border border-[#4a4a4a] bg-[#1b1b1b] px-4 text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a] focus:outline-none"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="text-[16px] text-[#cfcfcf]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle
            className="shrink-0 text-base text-[#a8a8a8]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-11 w-full rounded-sm border border-[#4a4a4a] bg-[#1b1b1b] px-4 text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a] focus:outline-none"
        />
      </div>

      <div className="mt-12 flex gap-9">
        <button
          type="button"
          className="h-11 rounded bg-[#a2542a] px-8 text-[16px] text-[#e8ddd5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-11 rounded bg-[#a2542a] px-8 text-[16px] text-[#e8ddd5]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-[24px]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);

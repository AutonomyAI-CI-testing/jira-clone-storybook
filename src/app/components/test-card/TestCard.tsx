import { HiInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-6 py-6 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xl text-[#f2f2f2]">
          UI magician Agent
        </h2>
        <MdSettings size={22} className="text-[#d9d9d9]" aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-sm bg-[#171717] px-3 py-3">
        <MdKeyboardArrowUp
          size={20}
          className="text-[#d9d9d9]"
          aria-hidden="true"
        />
        <span className="truncate text-sm text-[#c9c9c9]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <MdKeyboardArrowUp
          size={20}
          className="text-[#d9d9d9]"
          aria-hidden="true"
        />
        <h3 className="font-primary-bold text-lg text-[#e6e6e6]">
          Add New Design
        </h3>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-base text-[#dcdcdc]">
            Personal Access Token
          </label>
          <HiInformationCircle
            size={16}
            className="text-[#dcdcdc]"
            aria-hidden="true"
          />
        </div>
        <input
          className="h-12 w-full rounded-sm border border-[#8c8c8c] bg-[#1e1e1e] px-3 text-sm text-[#e6e6e6] placeholder:text-[#b8b8b8] focus:outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-base text-[#dcdcdc]">Design URL</label>
          <HiInformationCircle
            size={16}
            className="text-[#dcdcdc]"
            aria-hidden="true"
          />
        </div>
        <input
          className="h-12 w-full rounded-sm border border-[#8c8c8c] bg-[#1e1e1e] px-3 text-sm text-[#e6e6e6] placeholder:text-[#b8b8b8] focus:outline-none"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          className="h-12 min-w-[140px] rounded-sm bg-[#a8491a] px-6 font-primary text-base text-[#f0e2da] hover:bg-[#934013]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-12 min-w-[140px] rounded-sm bg-[#a8491a] px-6 font-primary text-base text-[#f0e2da] hover:bg-[#934013]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-lg text-[#dcdcdc]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

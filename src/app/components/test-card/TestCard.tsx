import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-10 py-8 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#e0e0e0]"
        >
          <FaCog size={22} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[17px] text-[#c9c9c9]">
        <FaChevronUp size={16} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-16 flex items-center gap-3 font-primary-bold text-2xl text-[#e6e6e6]">
        <FaChevronUp size={16} />
        Add New Design
      </h2>

      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[17px] text-[#c9c9c9]">
          <span>Personal Access Token</span>
          <FaInfoCircle size={16} />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="h-[56px] w-full border border-[#8f8f8f] bg-[#1a1a1a] px-4 text-[17px] text-[#e6e6e6] placeholder:text-[#b8b8b8] focus-visible:outline-none"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[17px] text-[#c9c9c9]">
          <span>Design URL</span>
          <FaInfoCircle size={16} />
        </div>
        <input
          placeholder="https://www.figma.com/file/"
          className="h-[56px] w-full border border-[#8f8f8f] bg-[#1a1a1a] px-4 text-[17px] text-[#e6e6e6] placeholder:text-[#b8b8b8] focus-visible:outline-none"
        />
      </div>

      <div className="mt-8 flex items-center justify-end gap-9">
        <button
          type="button"
          className="h-16 w-[168px] bg-[#a8492a] font-primary-bold text-[17px] text-[#f0e2da]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-16 w-[168px] bg-[#a8492a] font-primary-bold text-[17px] text-[#f0e2da]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-auto font-primary-bold text-2xl text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

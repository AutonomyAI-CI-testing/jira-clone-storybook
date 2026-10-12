import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[500px] bg-[#1b1b1b] px-8 py-9 text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#e6e6e6]">UI magician Agent</h1>
        <FiSettings aria-hidden className="text-2xl text-[#e6e6e6]" />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <FiChevronUp aria-hidden className="shrink-0 text-xl" />
        <span className="truncate text-lg text-[#9b9b9b]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <FiChevronUp aria-hidden className="shrink-0 text-xl" />
        <h2 className="text-2xl font-bold">Add New Design</h2>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <span className="text-lg">Personal Access Token</span>
          <FiInfo aria-hidden className="shrink-0 text-lg" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full border border-[#8a8a8a] bg-[#232323] px-4 py-3 text-base placeholder:text-[#8f8f8f] focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="text-lg">Design URL</span>
          <FiInfo aria-hidden className="shrink-0 text-lg" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 w-full border border-[#8a8a8a] bg-[#232323] px-4 py-3 text-base placeholder:text-[#8f8f8f] focus:outline-none"
        />
      </div>

      <div className="mt-10 flex gap-8">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#9c4a1c] px-6 py-4 text-xl font-medium text-[#c9c9c9]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#9c4a1c] px-6 py-4 text-xl font-medium text-[#c9c9c9]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-24 text-2xl font-bold">Recent Breakdowns</h3>
    </div>
  );
};

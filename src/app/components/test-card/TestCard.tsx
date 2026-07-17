import { HiChevronUp, HiOutlineCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[320px] bg-[#222222] px-5 py-6 font-sans text-white"
    >
      {/* 1. Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <HiOutlineCog className="text-2xl text-white" />
      </div>

      {/* 2. Collapsible row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="shrink-0 text-base text-[#c07a4f]" />
        <span className="text-sm text-[#c07a4f]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-8" />

      {/* 4. Add New Design row */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp className="shrink-0 text-base text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 5. Personal Access Token */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <HiInformationCircle className="text-base text-[#888888]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded border border-[#444444] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#888888] placeholder-[#666666] outline-none"
        readOnly
      />

      {/* 6. Design URL */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm text-white">Design URL</span>
        <HiInformationCircle className="text-base text-[#888888]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full rounded border border-[#444444] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#888888] placeholder-[#666666] outline-none"
        readOnly
      />

      {/* 7. Buttons */}
      <div className="mb-8 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b5451b] px-4 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5451b] px-4 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};

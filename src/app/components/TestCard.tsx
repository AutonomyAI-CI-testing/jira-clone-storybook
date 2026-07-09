import { HiCog, HiInformationCircle, HiChevronUp } from "react-icons/hi";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-72 flex-col gap-4 rounded-lg bg-[#2a2a2a] p-5"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiCog className="h-5 w-5 text-white" />
      </div>

      {/* 2. Chevron + muted text row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="h-4 w-4 text-[#c07a4a]" />
        <span className="text-sm text-[#c07a4a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. "Add New Design" section heading */}
      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp className="h-4 w-4 text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Form area */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-sm text-white">Personal Access Token</span>
            <HiInformationCircle className="h-4 w-4 text-white/60" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-zinc-600 bg-[#1e1e1e] px-3 py-2 text-sm text-zinc-400 outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-sm text-white">Design URL</span>
            <HiInformationCircle className="h-4 w-4 text-white/60" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-zinc-600 bg-[#1e1e1e] px-3 py-2 text-sm text-zinc-400 outline-none placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* 5. Button row */}
      <div className="mt-2 flex gap-3">
        <button className="rounded-lg bg-[#b85c2a] px-5 py-2 font-medium text-white">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b85c2a] px-5 py-2 font-medium text-white">
          Prepare
        </button>
      </div>

      {/* 6. Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-base font-bold text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

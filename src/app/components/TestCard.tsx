export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1a1a17] text-[#e6e6e6] font-sans w-[420px] rounded-[10px] p-7 flex flex-col gap-0 shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-3.5">
        <h2 className="m-0 text-[22px] font-bold text-white">
          UI magician Agent
        </h2>
        <svg
          stroke="#8c8c8c"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-7 overflow-hidden">
        <span className="text-amber-700 text-sm flex-shrink-0">^</span>
        <span className="text-amber-700 text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white font-bold text-base">^</span>
        <span className="text-white font-bold text-xl">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <label className="text-zinc-400 text-sm font-semibold">
            Personal Access Token
          </label>
          <span className="text-zinc-400 text-[13px]">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full px-3 py-2.5 bg-[#2c2c28] border-[1.5px] border-[#444440] rounded-md text-[#c0c0c0] text-sm outline-none placeholder:text-zinc-500"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-2">
          <label className="text-zinc-400 text-sm font-semibold">
            Design URL
          </label>
          <span className="text-zinc-400 text-[13px]">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full px-3 py-2.5 bg-[#2c2c28] border-[1.5px] border-[#444440] rounded-md text-[#c0c0c0] text-sm outline-none placeholder:text-zinc-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 py-3 bg-[#8b3a1a] text-[#f0c4a8] rounded-lg font-bold text-[15px] cursor-pointer hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 py-3 bg-[#8b3a1a] text-[#f0c4a8] rounded-lg font-bold text-[15px] cursor-pointer hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="m-0 text-[22px] font-bold text-white">
        Recent Breakdowns
      </h3>
    </div>
  );
}

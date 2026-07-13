export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#232323] w-[320px] p-5 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <span className="text-white text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <span className="text-[#aaa] text-xs">∧</span>
        <span className="text-[#c8764a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <span className="text-white text-sm">∧</span>
        <span className="text-white font-bold text-xl">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#ccc] text-sm font-semibold">Personal Access Token</span>
          <span className="text-[#999] text-sm">ⓘ</span>
        </div>
        <input
          className="w-full bg-[#2e2e2e] border border-[#555] rounded px-3 py-2 text-[#888] text-sm placeholder-[#777] outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#ccc] text-sm font-semibold">Design URL</span>
          <span className="text-[#999] text-sm">ⓘ</span>
        </div>
        <input
          className="w-full bg-[#2e2e2e] border border-[#666] rounded px-3 py-2 text-[#888] text-sm placeholder-[#777] outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 justify-center mt-1">
        <button className="bg-[#c0622a] text-white font-semibold px-8 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#a85528] text-white font-semibold px-8 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <span className="text-white font-bold text-xl">Recent Breakdowns</span>
    </div>
  );
};

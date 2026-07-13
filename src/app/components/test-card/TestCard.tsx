export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        <span className="text-[#aaa] text-2xl leading-none">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M2 10L7 4L12 10"
            stroke="#888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#c1440e] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M2 10L7 4L12 10"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#ccc] text-sm font-semibold">
          Personal Access Token
        </span>
        <span className="text-[#888] text-base leading-none">ℹ</span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full bg-[#1e1e1e] border border-[#555] rounded text-[#888] placeholder-[#666] text-sm px-3 py-3 mb-4 outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#ccc] text-sm font-semibold">Design URL</span>
        <span className="text-[#888] text-base leading-none">ℹ</span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full bg-[#1e1e1e] border border-[#777] rounded text-[#888] placeholder-[#666] text-sm px-3 py-3 mb-6 outline-none"
      />

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#c1440e] text-white font-semibold text-sm rounded-lg px-8 py-3 flex-1">
          Awesome
        </button>
        <button className="bg-[#a3380a] text-white font-semibold text-sm rounded-lg px-8 py-3 flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

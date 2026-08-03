export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-80 rounded-xl bg-[#2a2a2a] p-5 flex flex-col gap-4 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white">UI magician Agent</span>
        <span className="text-gray-400 text-xl">&#9881;</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-sm text-[#c07040]">
        <span>&#94;</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 font-semibold text-base text-white">
          <span>&#94;</span>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <span>Personal Access Token</span>
            <span className="text-gray-400 text-xs">&#9432;</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-md bg-[#1a1a1a] border border-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder:text-gray-600 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <span>Design URL</span>
            <span className="text-gray-400 text-xs">&#9432;</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-md bg-[#1a1a1a] border border-[#3a3a3a] px-3 py-2 text-sm text-gray-400 placeholder:text-gray-600 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-lg bg-[#b55b2a] py-2 text-sm font-semibold text-white text-center cursor-pointer">
            Awesome
          </button>
          <button className="flex-1 rounded-lg bg-[#b55b2a] py-2 text-sm font-semibold text-white text-center cursor-pointer">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <h2 className="font-bold text-lg text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;

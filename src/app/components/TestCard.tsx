export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-zinc-900 p-5 rounded-xl w-[320px] flex flex-col gap-4 text-white">

      {/* Header row */}
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
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
          style={{ flexShrink: 0 }}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2">
        <span className="text-amber-600">^</span>
        <p className="text-amber-700 text-sm">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div>
        <h2 className="font-bold text-base flex items-center gap-2 mb-2">
          <span className="text-white">^</span> Add New Design
        </h2>
        <div className="flex flex-col gap-3">

          {/* Personal Access Token Input */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <label htmlFor="pat" className="text-zinc-400 text-sm">Personal Access Token</label>
              <span className="text-zinc-400 text-xs">ⓘ</span>
            </div>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white placeholder:text-zinc-500"
              readOnly
            />
          </div>

      {/* Design URL */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <label htmlFor="designUrl" className="text-zinc-400 text-sm">Design URL</label>
              <span className="text-zinc-400 text-xs">ⓘ</span>
            </div>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file/: "
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white placeholder:text-zinc-500"
              readOnly
            />
          </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-amber-700 text-white rounded-lg px-6 py-3 font-medium">
          Awesome
        </button>
        <button className="flex-1 bg-amber-700 text-white rounded-lg px-6 py-3 font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="font-bold text-base mt-4">Recent Breakdowns</h2>
    </div>
  );
} 

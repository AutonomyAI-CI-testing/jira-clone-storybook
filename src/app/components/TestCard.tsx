export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1a1a1a] min-h-screen w-full max-w-sm mx-auto p-5 flex flex-col gap-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-xl font-bold">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#b5b5b5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#8b9291]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#b2b2b1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-[#b2b2b1] text-lg font-bold">Add New Design</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-[#a4a4a3] text-sm">Personal Access Token</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#242424] border border-[#3a3a3a] rounded-md px-3 py-2 text-[#737470] text-sm placeholder-[#737470] focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-[#a4a4a3] text-sm">Design URL</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#242424] border border-[#3a3a3a] rounded-md px-3 py-2 text-[#737470] text-sm placeholder-[#737470] focus:outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#a0522d] text-[#e8d5c4] font-semibold py-3 rounded-xl">
          Awesome
        </button>
        <button className="flex-1 bg-[#8B4513] text-[#e8d5c4] font-semibold py-3 rounded-xl">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-[#b0b0b0] text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[320px] bg-[#2a2a2a] text-white font-sans p-5 rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <button className="text-gray-400 hover:text-white">
          {/* Gear / settings icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          className="text-gray-400 shrink-0"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-[#c47a3a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            className="text-white shrink-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          <h2 className="text-base font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-500 placeholder-gray-600 text-sm focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <label className="text-sm text-gray-300">Design URL</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-500 placeholder-gray-600 text-sm focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-2">
        <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;

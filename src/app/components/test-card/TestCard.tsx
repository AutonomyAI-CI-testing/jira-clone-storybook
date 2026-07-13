export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen p-5 flex flex-col gap-5 max-w-[400px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl">UI magician Agent</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#c87941]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-[#c87941] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <h2 className="text-white font-bold text-xl">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-gray-300 text-sm font-medium">Personal Access Token</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1e1e] border border-[#555] text-gray-400 text-sm rounded px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:border-[#c87941]"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-gray-300 text-sm font-medium">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1e1e] border border-[#555] text-gray-400 text-sm rounded px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:border-[#c87941]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 px-5 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 px-5 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-white font-bold text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

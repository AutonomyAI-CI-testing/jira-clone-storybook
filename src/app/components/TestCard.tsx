export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] min-h-screen p-6 text-white">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-zinc-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="text-amber-600 shrink-0"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-amber-600 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="text-white shrink-0"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-zinc-300">Personal Access Token</span>
        {/* Info-circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-zinc-400 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </div>

      {/* Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 text-sm text-zinc-400 placeholder-zinc-500 mb-4 focus:outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-zinc-300">Design URL</span>
        {/* Info-circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-zinc-400 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </div>

      {/* URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 text-sm text-zinc-400 placeholder-zinc-500 mb-6 focus:outline-none"
      />

      {/* Button row */}
      <div className="flex gap-4 mb-10">
        <button
          type="button"
          className="flex-1 bg-[#b45309] text-white font-semibold rounded-lg px-6 py-3 text-sm"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#b45309] text-white font-semibold rounded-lg px-6 py-3 text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Footer */}
      <span className="text-lg font-bold text-white">Recent Breakdowns</span>
    </div>
  );
};

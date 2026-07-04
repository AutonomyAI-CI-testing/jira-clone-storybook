export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-[#b5b5b5] p-5 w-full max-w-xs min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-[#c8c8c8]">UI magician Agent</span>
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
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-sm text-[#8b9291]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-10 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#c8c8c8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-lg font-bold text-[#c8c8c8]">Add New Design</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-[#a4a4a3]">Personal Access Token</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#8b8b8b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#252525] border border-[#444] rounded px-3 py-2 text-sm text-[#737070] placeholder-[#737070] outline-none focus:border-[#666]"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-[#a4a4a3]">Design URL</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#8b8b8b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#252525] border border-[#444] rounded px-3 py-2 text-sm text-[#737070] placeholder-[#737070] outline-none focus:border-[#666]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-[#8c4020] text-[#e0c9b0] font-semibold rounded-lg px-4 py-2 text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#8c4020] text-[#e0c9b0] font-semibold rounded-lg px-4 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-lg font-bold text-[#c0c0c0]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;

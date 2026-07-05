export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-[#b5b5b5] p-5 w-full max-w-xs min-h-screen"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-[#c8c8c8]">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#b5b5b5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#8b9291]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-2 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#b2b2b1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="font-bold text-base text-[#c8c8c8]">Add New Design</span>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-4 mt-4">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm text-[#a4a4a3]">Personal Access Token</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#737470]"
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
            className="w-full bg-[#1a1a1a] border border-zinc-600 rounded px-3 py-2 text-sm text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm text-[#a4a4a3]">Design URL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#737470]"
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
            className="w-full bg-[#1a1a1a] border border-zinc-600 rounded px-3 py-2 text-sm text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>
      </div>

      {/* Button Row */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#8c4020] text-[#e8d5c8] font-semibold rounded-lg px-5 py-2 text-sm">
          Awesome
        </button>
        <button className="bg-[#8c4020] text-[#e8d5c8] font-semibold rounded-lg px-5 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="font-bold text-base text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;

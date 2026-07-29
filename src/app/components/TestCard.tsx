export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#282420] text-white w-[300px] min-h-screen p-5 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        {/* Gear icon */}
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        {/* Chevron up */}
        <svg className="w-4 h-4 text-[#c07a50] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span className="text-[#c07a50] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          <h2 className="text-base font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            {/* Info circle icon */}
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <input
            readOnly
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL field */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <input
            readOnly
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] text-white font-semibold py-3 px-4 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] text-white font-semibold py-3 px-4 rounded-lg text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;

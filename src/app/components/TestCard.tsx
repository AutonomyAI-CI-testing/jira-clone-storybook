export const TestCard = () => {
  return (
    <div id="testElem" className="w-[253px] bg-[#252220] text-[#c9c4be] font-sans px-5 py-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-white text-lg font-semibold">UI magician Agent</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#c9c4be]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 text-[#b05a2a] text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="h-6" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 text-white text-base font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Personal Access Token</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#5a504a] rounded px-3 py-2 text-sm text-[#7a7068] placeholder-[#7a7068] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Design URL</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#5a504a] rounded px-3 py-2 text-sm text-[#7a7068] placeholder-[#7a7068] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b05a2a] text-white text-sm font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b05a2a] text-white text-sm font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div className="text-white text-base font-semibold">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;

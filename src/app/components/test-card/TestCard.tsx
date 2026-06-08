
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="bg-[#272822] p-4 text-white rounded-md space-y-4 max-w-sm mx-auto">

    {/* Header row */}
    <div className="flex items-center justify-between">
      <span className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</span>
      <svg className="w-4 h-4 text-[#b5b5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>

    {/* Subtitle row */}
    <div className="flex items-center gap-2">
      <svg className="w-3 h-3 text-[#8b9291]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
      <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
    </div>

    {/* Add New Design section */}
    <div className="flex items-center gap-2">
      <svg className="w-3 h-3 text-[#b2b2b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
      <span className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</span>
    </div>

    {/* Personal Access Token field */}
    <div>
      <label className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold mb-1">
        Personal Access Token
        <svg className="w-3 h-3 text-[#a4a4a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </label>
      <input
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-[#272822] border border-[#a5adad] p-2 rounded-md w-full text-[11.5px] text-[#737470] font-semibold focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
      />
    </div>

    {/* Design URL field */}
    <div>
      <label className="flex items-center gap-1 text-[#a3a3a2] text-[11.5px] font-semibold mb-1">
        Design URL
        <svg className="w-3 h-3 text-[#a3a3a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </label>
      <input
        placeholder="https://www.figma.com/file/:"
        className="bg-[#272822] border-2 border-[#929291] p-2 rounded-md w-full text-[10.5px] text-[#71726e] font-semibold focus:outline-none focus:ring-1 focus:ring-[#929291]"
      />
    </div>

    {/* Buttons */}
    <div className="flex gap-3">
      <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-md py-2 px-4 flex-1">
        Awesome
      </button>
      <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-md py-2 px-4 flex-1">
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div>
      <span className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</span>
    </div>

  </div>
);

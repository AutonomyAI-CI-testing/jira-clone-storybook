export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#272822] p-4 max-w-sm mx-auto rounded-lg shadow-lg font-sans text-white">
      {/* Header row */}
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        {/* Gear Icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.62l.7 1.02a.66.66 0 0 1-.95.95l-1.02-.7a1.65 1.65 0 0 0-1.62-.3c-.63.07-1.25.07-1.88 0-.6-.07-1.22-.07-1.85 0a1.65 1.65 0 0 0-1.62.3l-1.02.7a.66.66 0 0 1-.95-.95l.7-1.02a1.65 1.65 0 0 0-.3-1.62c-.07-.63-.07-1.25 0-1.88.07-.6.07-1.22 0-1.85a1.65 1.65 0 0 0 .3-1.62l-.7-1.02a.66.66 0 0 1 .95-.95l1.02.7a1.65 1.65 0 0 0 1.62-.3c.63-.07 1.25-.07 1.88 0 .6.07 1.22.07 1.85 0a1.65 1.65 0 0 0 1.62.3l1.02-.7a.66.66 0 0 1 .95.95l-.7 1.02a1.65 1.65 0 0 0 .3 1.62c.07.63.07 1.25 0 1.88-.07.6-.07 1.22 0 1.85z"></path>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-4 px-1">
        {/* Chevron Up Icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      <div className="h-5"></div> {/* Spacer / divider area */}

      {/* Add New Design section */}
      <div className="flex items-center gap-1 mb-3 px-1">
        {/* Chevron Up Icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3 px-1">
        <label className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold mb-1">
          Personal Access Token 
          {/* Info Icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input 
          type="text" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
          className="w-full p-2 rounded border-2 border-[#929291] bg-[#272822] text-[#737470] text-[11.5px]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5 px-1">
        <label className="flex items-center gap-1 text-[#a3a3a2] text-[11.5px] font-semibold mb-1">
          Design URL
          {/* Info Icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input 
          type="text" 
          placeholder="https://www.figma.com/file:/"
          className="w-full p-2 rounded border border-[#a5adad] bg-[#272822] text-[#71726e] text-[11.5px]"
        />
      </div>

      {/* Buttons row */}
      <div className="flex justify-center gap-2 mb-6">
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg px-6 py-3 w-1/2">Awesome</button>
        <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg px-6 py-3 w-1/2">Prepare</button>
      </div>

      {/* Footer */}
      <div className="px-1">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

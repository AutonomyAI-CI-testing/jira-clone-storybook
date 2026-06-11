export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-sm font-semibold">UI magician Agent</h2>
        <span>⚙️</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1.5 mt-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8L6 14H18L12 8Z" fill="#8b9291"/>
        </svg>
        <p className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mt-8 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8L6 14H18L12 8Z" fill="#b2b2b1"/>
        </svg>
        <h3 className="text-[#b2b2b1] text-sm font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <label htmlFor="pat" className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</label>
          <span>ⓘ</span>
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 mt-1 text-[#737470] text-xs font-semibold placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-xs font-semibold">Design URL</label>
          <span>ⓘ</span>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 mt-1 text-[#71726e] text-xs font-semibold placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold px-8 py-2.5">Awesome</button>
        <button className="bg-[#843a17] rounded text-[#8c8078] text-xs font-semibold px-8 py-2.5">Prepare</button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h3 className="text-[#b0b0b0] text-sm font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

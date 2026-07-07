export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1d17] p-4 font-sans text-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[#b5b5b5] text-[13.5px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            d="M7.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
          />
          <path
            d="M12.1 9.7c.1-.3.1-.5 0-.8l1.1-.9a.3.3 0 0 0 .1-.3l-1-1.8a.3.3 0 0 0-.3-.1l-1.3.5a3 3 0 0 0-.7-.4l-.2-1.4A.3.3 0 0 0 9.5 4h-2a.3.3 0 0 0-.3.3l-.2 1.4a3 3 0 0 0-.7.4L5 5.6a.3.3 0 0 0-.3.1l-1 1.8c0 .1 0 .2.1.3l1.1.9c0 .3 0 .5 0 .8l-1.1.9a.3.3 0 0 0-.1.3l1 1.8c.1.1.2.2.3.1l1.3-.5c.2.2.4.3.7.4l.2 1.4c0 .1.1.2.3.2h2c.1 0 .2-.1.3-.2l.2-1.4c.3-.1.5-.2.7-.4l1.3.5c.1 0 .2 0 .3-.1l1-1.8a.3.3 0 0 0-.1-.3l-1.1-.9Z"
            stroke="#b5b5b5"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1.5 mb-8">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1.5 6L6 1.5L10.5 6" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-[#b2b2b1] text-[13.5px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[#a4a4a3] text-[11.5px]">Personal Access Token</span>
        {/* Info icon */}
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="6.5" r="6" stroke="#a4a4a3" strokeWidth="1" />
          <text x="6.5" y="10" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontFamily="sans-serif">i</text>
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder-[#737470] mb-3 outline-none"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[#a3a3a2] text-[11.5px]">Design URL</span>
        {/* Info icon */}
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="6.5" r="6" stroke="#a3a3a2" strokeWidth="1" />
          <text x="6.5" y="10" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontFamily="sans-serif">i</text>
        </svg>
      </div>

      {/* Design URL input */}
      <input
        className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[11.5px] text-[#71726e] placeholder-[#71726e] mb-4 outline-none"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#843a17] text-[#c09080] text-[11.5px] font-semibold rounded py-2 px-3">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#c09080] text-[11.5px] font-semibold rounded py-2 px-3">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold text-[#b0b0b0] text-[13.5px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#282828] p-4 max-w-[320px] font-sans text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] font-bold text-[13.5px]">UI magician Agent</h2>
        <svg
          className="w-4 h-4 text-white flex-shrink-0"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-6">
        <svg
          className="w-3 h-3 text-[#8b9291] rotate-180 flex-shrink-0"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
        <p className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-3 h-3 text-[#b2b2b1] rotate-180 flex-shrink-0"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
        <p className="text-[#b2b2b1] text-[13.5px] font-bold">Add New Design</p>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px]">Personal Access Token</label>
          <svg
            className="w-3 h-3 text-[#a4a4a3] flex-shrink-0"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full p-2 text-[11.5px] bg-[#272822] border border-[#a5adad] rounded outline-none text-[#737470]"
          readOnly
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="design-url" className="text-[#a3a3a2] text-[11.5px]">Design URL</label>
          <svg
            className="w-3 h-3 text-[#a3a3a2] flex-shrink-0"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 text-[11.5px] bg-[#272822] border-2 border-[#929291] rounded outline-none text-[#71726e]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-6">
        <button className="flex-1 py-2 bg-[#843a17] text-[#8c8078] rounded text-[11.5px] font-medium">
          Awesome
        </button>
        <button className="flex-1 py-2 bg-[#843a17] text-[#8c8078] rounded text-[11.5px] font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;


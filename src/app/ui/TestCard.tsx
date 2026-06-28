
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 font-sans">
      {/* Row 1 - Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.62l.7 1a2.1 2.1 0 0 1-3.5 2.18l-.7-1a1.65 1.65 0 0 0-1.7-.3c-.2-.08-.4-.14-.6-.2v-2c.2-.06.4-.1.6-.14a1.65 1.65 0 0 0 1.7-.3l.7-1a2.1 2.1 0 0 1 3.5-2.18zM12 21.2a1.65 1.65 0 0 0-1.7-.3c-.2-.08-.4-.14-.6-.2v-2c.2-.06.4-.1.6-.14a1.65 1.65 0 0 0 1.7-.3l.7-1a2.1 2.1 0 0 1 3.5-2.18l-.7-1a1.65 1.65 0 0 0-1.7-.3c-.2-.08-.4-.14-.6-.2v-2c.2-.06.4-.1.6-.14a1.65 1.65 0 0 0 1.7-.3l.7-1a2.1 2.1 0 0 1 3.5-2.18zM4.6 15a1.65 1.65 0 0 0-.3 1.62l-.7 1a2.1 2.1 0 0 1 3.5 2.18l.7-1a1.65 1.65 0 0 0 1.7-.3c.2-.08.4-.14.6-.2v-2c-.2-.06-.4-.1-.6-.14a1.65 1.65 0 0 0-1.7-.3l-.7-1a2.1 2.1 0 0 1-3.5-2.18zM12 2.8a1.65 1.65 0 0 0-1.7-.3c-.2-.08-.4-.14-.6-.2V2.8c.2-.06.4-.1.6-.14a1.65 1.65 0 0 0 1.7-.3l.7-1a2.1 2.1 0 0 1 3.5-2.18l-.7-1a1.65 1.65 0 0 0-1.7-.3c-.2-.08-.4-.14-.6-.2V-.8c.2-.06.4-.1.6-.14a1.65 1.65 0 0 0 1.7-.3l.7-1a2.1 2.1 0 0 1 3.5-2.18z"></path>
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      </div>

      {/* Row 2 - Subtitle */}
      <div className="flex items-center gap-1 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <p className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="mt-6"></div>

      {/* Row 3 - Section heading "Add New Design" */}
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
          Personal Access Token
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-[11.5px] placeholder:text-[#737470] focus:outline-none focus:border-[#b5451b]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mt-4">
        <label className="flex items-center gap-1 text-[#a3a3a2] text-[11.5px] font-semibold mb-2">
          Design URL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#71726e] text-[11.5px] placeholder:text-[#71726e] focus:outline-none focus:border-[#b5451b]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="bg-[#b5451b] rounded-lg px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold flex-1 hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="bg-[#b5451b] rounded-lg px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold flex-1 hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] font-semibold text-[13.5px] mt-6">Recent Breakdowns</h3>
    </div>
  );
};

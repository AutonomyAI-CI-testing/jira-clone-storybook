export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 font-sans min-h-screen">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
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
          className="lucide lucide-settings"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.25a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.55a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.25a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.25a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.55a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.25a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mt-2">
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
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="text-[#8b9291] text-xs">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8"></div>

      {/* Section Heading: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
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
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <label className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
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
            className="lucide lucide-info"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </label>
        <input
          type="text"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL Input */}
      <div className="mt-3">
        <label className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">Design URL</span>
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
            className="lucide lucide-info"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </label>
        <input
          type="text"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] outline-none"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-[#b5451b] text-[#8c8078] text-xs font-semibold py-2 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] text-[#8c8078] text-xs font-semibold py-2 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-[#b0b0b0] font-semibold text-sm mt-10">Recent Breakdowns</h3>
    </div>
  );
};
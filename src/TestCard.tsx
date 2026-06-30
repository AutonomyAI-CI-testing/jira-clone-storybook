
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-[#b5b5b5] text-[13.5px]">
          UI magician Agent
        </span>
        {/* Gear Icon */}
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
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6">
        {/* Chevron Up Icon */}
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
        <span className="text-[#8b9291] text-[11.5px] font-semibold ml-1">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        {/* Chevron Up Icon */}
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
          className="lucide lucude-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="font-semibold text-[#b2b2b1] text-[13.5px] ml-1">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="personalAccessToken" className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </label>
          {/* Info Icon */}
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
            className="lucide lucide-info ml-1"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#4a4a4a] text-[#737470] text-[11.5px] font-semibold focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </label>
          {/* Info Icon */}
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
            className="lucide lucide-info ml-1"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file:/"
          className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#4a4a4a] text-[#737470] text-[11.5px] font-semibold focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 py-2 rounded-lg bg-[#8B4513] text-[#8c8078] text-[11.5px] font-semibold">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded-lg bg-[#8B4513] text-[#8c8078] text-[11.5px] font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <h2 className="font-semibold text-[#b0b0b0] text-[13.5px]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

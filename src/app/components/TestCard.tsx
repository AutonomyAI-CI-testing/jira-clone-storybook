export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a18] flex flex-col py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 mb-8">
        {/* Up chevron */}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L4.5 1.5L8 5"
            stroke="#8b9291"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[60px]" />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          {/* Down chevron */}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#b2b2b1"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path
                d="M7.5 6.5v5"
                stroke="#a4a4a3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2.5">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            {/* Info icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path
                d="M7.5 6.5v5"
                stroke="#a3a3a2"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2.5">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-6">
          <button className="bg-[#843a17] rounded px-5 py-2.5 text-[11.5px] font-semibold text-[#8c8078] w-[85px]">
            Awesome
          </button>
          <button className="bg-[#843a17] rounded px-5 py-2.5 text-[11.5px] font-semibold text-[#8c8078] w-[85px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;

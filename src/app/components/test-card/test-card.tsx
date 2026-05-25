export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button aria-label="Settings" className="focus-visible:outline-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="9" stroke="#b5b5b5" strokeWidth="1" />
            <circle cx="10" cy="6" r="1" fill="#b5b5b5" />
            <circle cx="14" cy="10" r="1" fill="#b5b5b5" />
            <circle cx="10" cy="14" r="1" fill="#b5b5b5" />
            <circle cx="6" cy="10" r="1" fill="#b5b5b5" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <div className="mb-20 flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M12 10L8 6L4 10"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expanded section header */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <button
            aria-label="Personal Access Token info"
            className="focus-visible:outline-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7" stroke="#a4a4a3" strokeWidth="1" />
              <text
                x="8"
                y="10"
                textAnchor="middle"
                fill="#a4a4a3"
                fontSize="10"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </button>
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#404040] bg-black p-3 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <button
            aria-label="Design URL info"
            className="focus-visible:outline-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7" stroke="#a3a3a2" strokeWidth="1" />
              <text
                x="8"
                y="10"
                textAnchor="middle"
                fill="#a3a3a2"
                fontSize="10"
                fontWeight="600"
              >
                i
              </text>
            </svg>
          </button>
        </div>
        <input
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#404040] bg-black p-3 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded bg-[#8b5a3c] py-3 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9d6649] active:bg-[#7a4d2f]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#8b5a3c] py-3 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9d6649] active:bg-[#7a4d2f]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#8b9291]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

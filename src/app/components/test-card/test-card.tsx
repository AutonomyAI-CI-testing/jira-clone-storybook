export const TestCard = () => {
  return (
    <div className="w-full max-w-[254px] bg-black p-6">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings/Gear Icon */}
        <svg
          className="h-4 w-4 flex-shrink-0"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="2" fill="none" stroke="#b5b5b5" strokeWidth="1" />
          <circle cx="9" cy="3" r="0.8" fill="#b5b5b5" />
          <circle cx="15" cy="9" r="0.8" fill="#b5b5b5" />
          <circle cx="9" cy="15" r="0.8" fill="#b5b5b5" />
          <circle cx="3" cy="9" r="0.8" fill="#b5b5b5" />
          <circle cx="13" cy="5" r="0.6" fill="#b5b5b5" />
          <circle cx="13" cy="13" r="0.6" fill="#b5b5b5" />
          <circle cx="5" cy="13" r="0.6" fill="#b5b5b5" />
          <circle cx="5" cy="5" r="0.6" fill="#b5b5b5" />
          <circle cx="9" cy="9" r="6.5" fill="none" stroke="#b5b5b5" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-16">
        <div className="flex items-center gap-2">
          {/* Chevron UP */}
          <svg
            className="h-3 w-3 flex-shrink-0"
            viewBox="0 0 6 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3L3 1L1 3" stroke="#b5b5b5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-16">
        <div className="flex items-center gap-2">
          {/* Chevron UP */}
          <svg
            className="h-3 w-3 flex-shrink-0"
            viewBox="0 0 6 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3L3 1L1 3" stroke="#b2b2b1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>
      </div>

      {/* Form Section - Personal Access Token */}
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          {/* Info Icon */}
          <svg
            className="h-4 w-4 flex-shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" fill="none" stroke="#a4a4a3" strokeWidth="0.8" />
            <text x="8" y="9.5" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontWeight="bold" fontFamily="Inter">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470]"
          readOnly
        />
      </div>

      {/* Form Section - Design URL */}
      <div className="mb-14">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          {/* Info Icon */}
          <svg
            className="h-4 w-4 flex-shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" fill="none" stroke="#a3a3a2" strokeWidth="0.8" />
            <text x="8" y="9.5" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontWeight="bold" fontFamily="Inter">
              i
            </text>
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-3">
        <button className="flex-1 rounded-[6px] bg-[#843a17] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a04a1e] active:bg-[#6d2f13]">
          Awesome
        </button>
        <button className="flex-1 rounded-[6px] bg-[#843a17] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a04a1e] active:bg-[#6d2f13]">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Copyright Footer */}
      <div className="mt-12 border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};

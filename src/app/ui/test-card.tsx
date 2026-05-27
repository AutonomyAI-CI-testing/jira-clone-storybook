export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#1e1e1e] p-5">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <svg
          className="h-[18px] w-[18px] text-[#b5b5b5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-10 flex items-center gap-3">
        <svg
          className="h-3 w-3 text-[#b2b2b1]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <h2 className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </h2>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-8 flex items-center gap-3">
        <svg
          className="h-3 w-3 text-[#b2b2b1]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Form Section */}
      <div className="space-y-6">
        {/* Personal Access Token */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <svg
              className="h-4 w-4 text-[#a4a4a3]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#929291] bg-[#272822] px-3 py-3 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470]"
          />
        </div>

        {/* Design URL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <svg
              className="h-4 w-4 text-[#a3a3a2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-[#a5adad] bg-[#272822] px-3 py-3 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-5">
        <button className="flex-1 rounded bg-[#9b5234] py-3 text-[11.5px] font-semibold text-[#c4aa9e]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#9b5234] py-3 text-[11.5px] font-semibold text-[#c4aa9e]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <h4 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h4>
      </div>

      {/* Footer */}
      <div className="border-t border-[#d1d5db] pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#a4a4a3]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

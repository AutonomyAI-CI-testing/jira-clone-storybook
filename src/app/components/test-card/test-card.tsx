export const TestCard = (): JSX.Element => {
  return (
    <div className="w-96 p-8 font-sans" style={{ backgroundColor: '#2b2b2b' }}>
      {/* Header with title and settings icon */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[26px] font-semibold" style={{ color: '#b5b5b5' }}>
          UI magician Agent
        </h1>
        {/* Settings icon */}
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#b5b5b5' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Collapsible section 1 */}
      <div className="mb-16 pb-10 border-b" style={{ borderColor: '#404038' }}>
        <div className="flex items-center gap-3">
          {/* Chevron down (expanded) */}
          <svg
            className="h-5 w-5 stroke-[2.5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: '#d0d0d0' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-[14px] font-semibold" style={{ color: '#8b9291' }}>
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Collapsible section 2 - Add New Design */}
      <div className="mb-12 pb-10 border-b" style={{ borderColor: '#404038' }}>
        <div className="flex items-center gap-3">
          {/* Chevron down (expanded) */}
          <svg
            className="h-5 w-5 stroke-[2.5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: '#d0d0d0' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-[18px] font-semibold" style={{ color: '#b2b2b1' }}>
            Add New Design
          </span>
        </div>
      </div>

      {/* Form section */}
      <div className="space-y-8">
        {/* Personal Access Token */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <label className="text-[16px] font-bold" style={{ color: '#a4a4a3' }}>
              Personal Access Token
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: '#c0c0c0' }}
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            disabled
            className="w-full border px-4 py-4 text-[14px] font-semibold disabled:cursor-not-allowed disabled:opacity-75"
            style={{ borderColor: '#c0c0c0', backgroundColor: '#272822', color: '#a0a0a0' }}
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <label className="text-[16px] font-bold" style={{ color: '#a3a3a2' }}>
              Design URL
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: '#c0c0c0' }}
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border px-4 py-4 text-[14px] font-semibold"
            style={{ borderColor: '#c0c0c0', backgroundColor: '#272822', color: '#a0a0a0' }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex gap-4">
        <button
          className="flex-1 rounded px-6 py-4 text-[17px] font-semibold"
          style={{ backgroundColor: "#A0522D", color: '#8c8078' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-6 py-4 text-[17px] font-semibold"
          style={{ backgroundColor: "#A0522D", color: '#8c8078' }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t" style={{ borderColor: '#404038' }}>
        <h2 className="text-[21px] font-bold" style={{ color: '#b0b0b0' }}>
          Recent Breakdowns
        </h2>
      </div>

      {/* Copyright Footer */}
      <div className="border-t pt-3" style={{ borderColor: '#D1D5DB' }}>
        <p className="text-center text-[14px] font-semibold" style={{ color: '#a0a0a0' }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

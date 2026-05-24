// Icon SVG for info tooltips - used in form labels
const InfoIcon = () => (
  <svg
    className="h-3.5 w-3.5 text-[#a4a4a3]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4m0 4v.01" />
  </svg>
);

// Icon SVG for menu/options in header
const MenuIcon = () => (
  <svg
    className="h-4 w-4 text-[#b5b5b5]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-full max-w-xs flex-col bg-black">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <MenuIcon />
      </div>

      {/* Collapsible Section */}
      <div className="flex flex-col px-5 py-6">
        <div className="flex items-center gap-3 pb-4">
          <span className="text-sm font-semibold text-[#8b9291]">˄</span>
          <h2 className="text-xs font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </h2>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#b2b2b1]">˄</span>
          <h2 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-6 px-5 py-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#737470] placeholder-[#737470]"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="url"
            placeholder="https://www.figma.com/file/:"
            className="border border-[#929291] bg-[#272822] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder-[#71726e]"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 px-5 py-4">
        <button className="flex-1 rounded bg-[#843a17] py-2 text-center text-xs font-semibold text-[#8c8078] transition-colors hover:bg-[#764d2a]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] py-2 text-center text-xs font-semibold text-[#8c8078] transition-colors hover:bg-[#764d2a]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="flex flex-col px-5 py-6">
        <h3 className="text-sm font-semibold text-[#b0b0b0]">Recent Breakdowns</h3>
      </div>

      {/* Footer */}
      <div className="border-t pt-3 text-center" style={{ borderColor: "#d1d5db" }}>
        <p className="text-xs" style={{ color: "#9ca3af" }}>© AutonomyAI</p>
      </div>
    </div>
  );
};

TestCard.displayName = "TestCard";

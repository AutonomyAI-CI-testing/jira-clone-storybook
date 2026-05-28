// SVG icons used in the component
const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1zm0 16c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM4.22 4.22c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.22 4.22zm11.31 11.31c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zM1 12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1zm16 0c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zM4.22 19.78c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41zm11.31-11.31c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[var(--DarkNeutral0)] p-4">
      <div className="w-full max-w-lg rounded-md bg-[var(--DarkNeutral100)] p-5">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-primary-bold text-sm text-[#b5b5b5]">
            UI magician Agent
          </h2>
          <button
            className="flex h-5 w-5 items-center justify-center text-[#b5b5b5] hover:text-[#d0d0d0]"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="mb-8 flex items-center gap-2 py-3">
          <span className="text-lg text-[#b2b2b1]">^</span>
          <p className="font-primary-bold text-xs text-[#b2b2b1]">
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design Section */}
        <div className="mb-8 flex items-center gap-2 py-3">
          <span className="text-xl text-[#a3a3a2]">^</span>
          <h3 className="font-primary-bold text-xs text-[#b2b2b1]">
            Add New Design
          </h3>
        </div>

        {/* Form Field 1: Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-1">
            <label
              htmlFor="personal-access-token"
              className="font-primary-bold text-xs text-[#a3a3a2]"
            >
              Personal Access Token
            </label>
            <button
              className="flex h-4 w-4 items-center justify-center text-[#8b9291]"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            id="personal-access-token"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="border-gray-700 w-full rounded-[3px] border bg-[#2a2a2a] px-3 py-2.5 font-primary-bold text-xs text-[#a0a09e] placeholder-[#707070] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focused"
          />
        </div>

        {/* Form Field 2: Design URL */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-1">
            <label
              htmlFor="design-url"
              className="font-primary-bold text-xs text-[#a3a3a2]"
            >
              Design URL
            </label>
            <button
              className="flex h-4 w-4 items-center justify-center text-[#8b9291]"
              aria-label="Info"
            >
              <InfoIcon />
            </button>
          </div>
          <input
            id="design-url"
            type="url"
            placeholder="https://www.figma.com/file/:"
            className="border-gray-700 w-full rounded-[3px] border bg-[#2a2a2a] px-3 py-2.5 font-primary-bold text-xs text-[#a0a09e] placeholder-[#707070] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focused"
          />
        </div>

        {/* Button Group */}
        <div className="mb-8 flex gap-3">
          <button className="flex-1 rounded-md bg-[#a0522d] px-3 py-2 font-primary-bold text-xs text-[#8c8078] hover:bg-[#b3623a] active:bg-[#8d4125]">
            Awesome
          </button>
          <button className="flex-1 rounded-md bg-[#a0522d] px-3 py-2 font-primary-bold text-xs text-[#8c8078] hover:bg-[#b3623a] active:bg-[#8d4125]">
            Prepare
          </button>
        </div>

        {/* Footer Section */}
        <div className="border-gray-700 border-t pt-6">
          <p className="font-primary-bold text-xs text-[#a3a3a2]">
            Recent Breakdowns
          </p>
        </div>

        {/* Copyright Footer */}
        <div className="border-gray-300 border-t pt-3 text-center">
          <p className="font-primary-bold text-xs text-[#a3a3a2]">
            © AutonomyAI
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full px-8 py-10"
      style={{ backgroundColor: "#1c1c1c", color: "#e8e8e8" }}
    >
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1
              className="text-2xl font-semibold tracking-tight"
              style={{ color: "#e8e8e8" }}
            >
              UI magician Agent
            </h1>
            <button
              type="button"
              className="mt-3 flex items-center gap-2 text-sm"
              style={{ color: "#9a9a9a" }}
            >
              <ChevronUpIcon />
              <span>From entire frame to a singl...</span>
            </button>
          </div>
          <button
            type="button"
            aria-label="Settings"
            className="mt-1"
            style={{ color: "#c4c4c4" }}
          >
            <GearIcon />
          </button>
        </div>

        <div className="mt-16">
          <button
            type="button"
            className="mb-6 flex items-center gap-2 text-lg font-medium"
            style={{ color: "#c8c8c8" }}
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: "#c8c8c8" }}
              >
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded border px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "#7a7a7a",
                color: "#d0d0d0",
              }}
            />
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: "#c8c8c8" }}
              >
                Design URL
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded border px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "#8a8a8a",
                color: "#d0d0d0",
                boxShadow: "0 0 0 1px #9a9a9a80",
              }}
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="rounded-md px-8 py-2.5 text-base font-medium"
              style={{ backgroundColor: "#b85c38", color: "#d4a090" }}
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md px-8 py-2.5 text-base font-medium"
              style={{ backgroundColor: "#b85c38", color: "#d4a090" }}
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-lg font-medium" style={{ color: "#c8c8c8" }}>
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

const GearIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2.5M12 20.5V23M4.22 4.22l1.77 1.77M17.99 17.99l1.77 1.77M1 12h2.5M20.5 12H23M4.22 19.78l1.77-1.77M17.99 6.01l1.77-1.77" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9a9a9a"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <circle cx="12" cy="8" r="0.6" fill="#9a9a9a" />
  </svg>
);

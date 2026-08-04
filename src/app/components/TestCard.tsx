export function TestCard() {
  const colors = {
    bg: "#2a2522",
    text: "#d4c5b8",
    textMuted: "#b07a5a",
    border: "#5a4035",
    placeholder: "#8a7060",
    btnBg: "#b05a2a",
    white: "#ffffff",
  };

  return (
    <div
      id="testElem"
      style={{ backgroundColor: colors.bg, color: colors.text, minHeight: "100vh" }}
      className="w-full max-w-sm mx-auto p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 style={{ color: colors.white }} className="text-xl font-bold">
          UI magician Agent
        </h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 24, height: 24, flexShrink: 0, color: colors.text }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10 text-sm" style={{ color: colors.textMuted }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 16, height: 16, flexShrink: 0 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 16, height: 16, flexShrink: 0, color: colors.white }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        <h2 style={{ color: colors.white }} className="text-lg font-bold">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: colors.text }} className="text-sm font-medium">
            Personal Access Token
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 16, height: 16, flexShrink: 0, color: colors.text }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "transparent",
            border: `1px solid ${colors.border}`,
            color: colors.placeholder,
          }}
          className="w-full rounded px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: colors.text }} className="text-sm font-medium">
            Design URL
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 16, height: 16, flexShrink: 0, color: colors.text }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "transparent",
            border: `1px solid ${colors.border}`,
            color: colors.placeholder,
          }}
          className="w-full rounded px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          style={{ backgroundColor: colors.btnBg, color: colors.white }}
          className="flex-1 font-semibold py-3 rounded-lg text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: colors.btnBg, color: colors.white }}
          className="flex-1 font-semibold py-3 rounded-lg text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={{ color: colors.white }} className="text-lg font-bold">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;

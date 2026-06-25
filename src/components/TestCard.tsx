// Design tokens derived from Figma reference
const COLORS = {
  background: '#1a1a1a',
  inputBg: '#333333',
  buttonBg: '#b85c38',
  buttonText: '#8c8078',
  title: '#b5b5b5',
  subtitle: '#8b9291',
  sectionHeader: '#b2b2b1',
  label: '#a4a4a3',
  placeholder: '#737470',
  footer: '#b0b0b0',
} as const;

/**
 * TestCard is a static smoke test component that replicates the "UI magician Agent" panel.
 * It uses absolute colors and inline SVGs to remain self-contained and match the Figma design exactly.
 */
const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background }}
      className="p-4 rounded-lg text-white max-w-md mx-auto my-8 shadow-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ color: COLORS.title }} className="text-lg font-semibold">UI magician Agent</h2>
        <button
          className="hover:opacity-80 transition-opacity"
          aria-label="Settings"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.28c.15.22.25.35.33.45a.5.5 0 0 1-.16.68l-2.07 1.2a.5.5 0 0 1-.68-.16l-.26-.4-.3-.15a1.65 1.65 0 0 0-1.05-.59c-.31.06-.63-.08-1.02-.2a.5.5 0 0 1-.36-.59V12a.5.5 0 0 1 .36-.59c.39-.12.71-.26 1.02-.2a1.65 1.65 0 0 0 1.05-.59l.3-.15.26-.4a.5.5 0 0 1 .68-.16l2.07 1.2a.5.5 0 0 1 .16.68c-.08.1-.18.23-.33.45-.14.2-.23.33-.3.42"></path>
          <path d="M8.6 9a1.65 1.65 0 0 0-.3-1.28c-.15-.22-.25-.35-.33-.45a.5.5 0 0 1 .16-.68L9.2 5.42a.5.5 0 0 1 .68.16l.26.4.3.15a1.65 1.65 0 0 0 1.05.59c.31-.06.63.08 1.02.2a.5.5 0 0 1 .36.59V12a.5.5 0 0 1-.36.59c-.39.12-.71.26-1.02.2a1.65 1.65 0 0 0-1.05.59l-.3.15-.26.4a.5.5 0 0 1-.68.16L8.6 9a.5.5 0 0 1-.16-.68c.08-.1.18-.23.33-.45.14-.2.23-.33.3-.42"></path>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
          </svg>
        </button>
      </div>

      {/* Subtitle / Context switcher */}
      <div className="flex items-center mb-6 cursor-pointer hover:opacity-80 transition-opacity">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: COLORS.subtitle }}
          className="mr-1"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <p style={{ color: COLORS.subtitle }} className="text-sm truncate">
          From entire frame to a single element...
        </p>
      </div>

      {/* Separator */}
      <hr className="border-gray-700 mb-6" />

      {/* Accordion-like section for adding designs */}
      <div className="flex items-center mb-4 cursor-default">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: COLORS.sectionHeader }}
          className="mr-1"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h3
          style={{ color: COLORS.sectionHeader }}
          className="text-base font-semibold"
        >
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="flex items-center text-sm font-medium mb-1"
          style={{ color: COLORS.label }}
        >
          Personal Access Token
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
            style={{ color: COLORS.label }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: COLORS.inputBg,
            color: COLORS.sectionHeader,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label
          htmlFor="designUrl"
          className="flex items-center text-sm font-medium mb-1"
          style={{ color: COLORS.label }}
        >
          Design URL
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
            style={{ color: COLORS.label }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: COLORS.inputBg,
            color: COLORS.sectionHeader,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          className="flex-1 py-2 px-4 rounded font-semibold transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          className="flex-1 py-2 px-4 rounded font-semibold transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 style={{ color: COLORS.footer }} className="text-base font-semibold">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;

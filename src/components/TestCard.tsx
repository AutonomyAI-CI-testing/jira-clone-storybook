// Constants for colors and dimensions to keep styles maintainable
const CARD_BG = '#2a2a2a';
const CARD_TEXT = '#e0e0e0';
const WHITE = '#ffffff';
const BUTTON_BG = '#b45309';
const ACCENT_ORANGE = '#b87c4c';
const INPUT_BG = '#3a3a3a';
const INPUT_BORDER = '#555';
const MUTED_TEXT = '#d0d0d0';
const ICON_COLOR = '#9ca3af';

const ChevronUpIcon = ({ className = "w-4 h-4", stroke = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={stroke} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={ICON_COLOR} className="w-4 h-4 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);

/**
 * TestCard - A smoke test component used to validate the UI magician Agent layout.
 * This is a static component with hardcoded values for visual verification.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ background: CARD_BG, color: CARD_TEXT }}
      className="p-5 rounded-lg max-w-sm mx-auto my-4 transition-all"
    >
      {/* Header section with agent title and gear icon */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold" style={{ color: WHITE }}>UI magician Agent</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={ICON_COLOR} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </div>

      {/* Primary context/breadcrumb-like row */}
      <div className="flex items-center mb-8" style={{ color: ACCENT_ORANGE }}>
        <ChevronUpIcon className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Main configuration section */}
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <ChevronUpIcon className="w-5 h-5 mr-2 flex-shrink-0" stroke={WHITE} />
          <h3 className="text-base font-bold" style={{ color: WHITE }}>Add New Design</h3>
        </div>

        {/* Input fields for Figma integration */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <label htmlFor="pat" className="text-sm font-medium" style={{ color: MUTED_TEXT }}>
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              style={{ background: INPUT_BG, borderColor: INPUT_BORDER, color: CARD_TEXT }}
              className="w-full px-3 py-2 rounded border text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <label htmlFor="designUrl" className="text-sm font-medium" style={{ color: MUTED_TEXT }}>
                Design URL
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file/:"
              style={{ background: INPUT_BG, borderColor: INPUT_BORDER, color: CARD_TEXT }}
              className="w-full px-3 py-2 rounded border text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>
        </div>

        {/* Action buttons section */}
        <div className="flex gap-4 mb-6">
          <button
            style={{ background: BUTTON_BG, color: WHITE }}
            className="flex-1 py-2 rounded-lg font-medium text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Awesome
          </button>
          <button
            style={{ background: BUTTON_BG, color: WHITE }}
            className="flex-1 py-2 rounded-lg font-medium text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* History/Log section */}
      <div className="border-t border-[#444] pt-4">
        <h3 className="text-base font-bold" style={{ color: WHITE }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};


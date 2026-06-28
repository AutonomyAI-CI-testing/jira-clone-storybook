/**
 * TestCard component replicates the "UI magician Agent" design from Figma.
 * It is a self-contained component used for pipeline verification.
 */
export const TestCard: React.FC = () => {
  // Figma design colors extracted as constants for maintainability
  const COLORS = {
    bg: "#2a2a2a",
    inputBg: "#1e1e1e",
    btnBg: "#8b4513", // Brown/Orange CTA
    textTitle: "#b5b5b5",
    textSubtitle: "#8b9291",
    textHeading: "#b0b0b0",
    textLabel: "#a4a4a3",
    textButton: "#e0d0c0",
    border: "#444",
  };

  return (
    <div 
      id="testElem" 
      className="p-5 font-[Inter,sans-serif] w-[254px]"
      style={{ backgroundColor: COLORS.bg, color: COLORS.textTitle }}
    >
      {/* Header Row: Title and Settings Icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold" style={{ color: COLORS.textTitle }}>UI magician Agent</h1>
        <span style={{ color: COLORS.textTitle }}>⚙</span>
      </div>

      {/* Subtitle Row: Path representation */}
      <div className="flex items-center text-sm mb-4" style={{ color: COLORS.textSubtitle }}>
        <span className="mr-1">^</span> From entire frame to a singl...
      </div>

      {/* Spacer per design requirements */}
      <div className="my-4" aria-hidden="true" />

      {/* Section Heading: Core Action */}
      <div className="flex items-center font-bold text-base mb-4" style={{ color: COLORS.textHeading }}>
        <span className="mr-1">^</span> Add New Design
      </div>

      {/* Personal Access Token Input Section */}
      <div className="mb-4">
        <label htmlFor="accessToken" className="flex items-center text-sm mb-2" style={{ color: COLORS.textLabel }}>
          Personal Access Token <span className="ml-1 text-xs" title="Information">ⓘ</span>
        </label>
        <input
          type="text"
          id="accessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 border rounded"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.border,
            color: COLORS.textTitle 
          }}
        />
      </div>

      {/* Design URL Input Section */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-sm mb-2" style={{ color: COLORS.textLabel }}>
          Design URL <span className="ml-1 text-xs" title="Information">ⓘ</span>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 border rounded"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.border,
            color: COLORS.textTitle 
          }}
        />
      </div>

      {/* Action Buttons: Primary CTAs */}
      <div className="flex gap-3 mb-6">
        <button 
          className="flex-1 py-2 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.btnBg, color: COLORS.textButton }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.btnBg, color: COLORS.textButton }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Navigation/History Heading */}
      <h2 className="font-bold text-base" style={{ color: COLORS.textHeading }}>
        Recent Breakdowns
      </h2>
    </div>
  );
};

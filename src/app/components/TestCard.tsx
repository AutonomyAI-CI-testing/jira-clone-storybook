/**
 * TestCard component
 * 
 * A self-contained smoke test component that replicates a specific Figma design.
 * Uses hardcoded values and Tailwind CSS for styling.
 * 
 * Design Specs:
 * - Background: Dark Gray (#2a2a2a)
 * - Highlights/Buttons: Orange-Brown (#8b4513)
 * - Text: Various muted grays
 */
const TestCard = () => {
  // Styling constants to maintain consistency and readability
  const COLORS = {
    cardBg: "bg-[#2a2a2a]",
    inputBg: "bg-[#1a1a1a]",
    buttonBg: "bg-[#8b4513]",
    borderColor: "border-[#3a3a3a]",
    titleText: "text-[#b5b5b5]",
    subtitleText: "text-[#8b9291]",
    headerText: "text-[#b2b2b1]",
    labelText: "text-[#a4a4a3]",
    placeholderText: "text-[#737470]",
    recentText: "text-[#b0b0b0]",
    buttonText: "text-[#8c8078]",
  };

  const TEXT_SIZES = {
    title: "text-[13.5px]",
    subtitle: "text-[11.5px]",
    label: "text-[11.5px]",
    button: "text-[11.5px]",
  };

  return (
    <div id="testElem" className={`flex flex-col ${COLORS.cardBg} p-4 rounded-lg w-80 shadow-xl`}>
      {/* Title Bar - "UI magician Agent" with gear icon */}
      <div className="flex justify-between items-center mb-2">
        <h2 className={`${COLORS.titleText} ${TEXT_SIZES.title} font-semibold`}>
          UI magician Agent
        </h2>
        <span className={`${COLORS.titleText} text-lg`} aria-hidden="true">⚙</span>
      </div>

      {/* Context Row - Chevron and muted description */}
      <div className="flex items-center mb-4">
        <span className={`${COLORS.subtitleText} mr-1`} aria-hidden="true">∧</span>
        <p className={`${COLORS.subtitleText} ${TEXT_SIZES.subtitle} font-semibold`}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Header - "Add New Design" */}
      <div className="flex items-center mb-4">
        <span className={`${COLORS.headerText} mr-1`} aria-hidden="true">∧</span>
        <h3 className={`${COLORS.headerText} ${TEXT_SIZES.title} font-semibold`}>
          Add New Design
        </h3>
      </div>

      {/* Field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <label htmlFor="pat" className={`${COLORS.labelText} ${TEXT_SIZES.label} font-semibold mr-1`}>
            Personal Access Token
          </label>
          <span className={`${COLORS.labelText} text-xs`} title="Find this in your Figma settings">ⓘ</span>
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={`w-full p-2 rounded ${COLORS.inputBg} border ${COLORS.borderColor} ${COLORS.placeholderText} ${TEXT_SIZES.label} font-semibold focus:outline-none focus:border-blue-500/50`}
        />
      </div>

      {/* Field: Design URL */}
      <div className="mb-6">
        <div className="flex items-center mb-1">
          <label htmlFor="designUrl" className={`${COLORS.labelText} ${TEXT_SIZES.label} font-semibold mr-1`}>
            Design URL
          </label>
          <span className={`${COLORS.labelText} text-xs`} title="Link to the Figma file">ⓘ</span>
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full p-2 rounded ${COLORS.inputBg} border ${COLORS.borderColor} text-[#71726e] text-[10.5px] font-semibold focus:outline-none focus:border-blue-500/50`}
        />
      </div>

      {/* Action Buttons - Orange-brown primary-style buttons */}
      <div className="flex justify-around gap-4 mb-6">
        <button className={`flex-1 py-2 rounded ${COLORS.buttonBg} ${COLORS.buttonText} ${TEXT_SIZES.button} font-semibold hover:brightness-110 transition-all`}>
          Awesome
        </button>
        <button className={`flex-1 py-2 rounded ${COLORS.buttonBg} ${COLORS.buttonText} ${TEXT_SIZES.button} font-semibold hover:brightness-110 transition-all`}>
          Prepare
        </button>
      </div>

      {/* Footer Title */}
      <div>
        <h3 className={`${COLORS.recentText} ${TEXT_SIZES.title} font-semibold`}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;

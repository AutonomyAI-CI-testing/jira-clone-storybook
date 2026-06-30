
/**
 * TestCard component
 * 
 * A smoke test component that replicates a "UI magician Agent" panel UI from Figma.
 * Uses hardcoded arbitrary Tailwind values to match the specific color palette of the design.
 */
export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="bg-[#2a2a2a] p-5 w-[294px] text-white flex flex-col gap-4 shadow-xl"
    >
      {/* Header Row: Title and Settings icon */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <button type="button" className="text-[#b5b5b5] text-lg hover:opacity-80 transition-opacity" aria-label="Settings">
          ⚙
        </button>
      </div>

      {/* Description Row: Muted text with caret indicator */}
      <div className="flex items-center gap-2">
        <span className="text-[#8b9291] text-xs select-none">^</span>
        <p className="text-[#8b9291] text-xs truncate">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section Header */}
      <SectionHeading title="Add New Design" />

      {/* Configuration Fields */}
      <div className="flex flex-col gap-4">
        <InputField 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <InputField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer Section */}
      <div className="mt-2 border-t border-[#3a3a3a] pt-4">
        <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
      </div>
    </div>
  );
}

/**
 * Reusable section heading with caret indicator
 */
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="text-[#b2b2b1] text-sm select-none">^</span>
      <h3 className="text-[#b2b2b1] font-semibold text-sm">{title}</h3>
    </div>
  );
}

/**
 * Styled input field with label and info icon
 */
function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label className="text-[#a4a4a3] text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 cursor-default">
        {label} <span className="text-sm opacity-60" title="More information">ⓘ</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-[#2a2a2a] border border-[#3a3a3a] text-[#b5b5b5] placeholder-[#737470] text-xs rounded-md p-2.5 focus:outline-none focus:border-[#b05a2f]/50 transition-colors"
      />
    </div>
  );
}

/**
 * Primary action button with design-specific orange-brown fill
 */
function ActionButton({ label }: { label: string }) {
  return (
    <button 
      type="button"
      className="bg-[#b05a2f] text-[#8c8078] hover:brightness-110 active:brightness-95 transition-all font-semibold text-xs rounded-md px-4 py-2.5 flex-1"
    >
      {label}
    </button>
  );
}

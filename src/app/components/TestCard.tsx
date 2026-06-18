
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Design tokens for the Magician Agent UI panel to ensure consistency while keeping unique values scoped.
const COLORS = {
  bg: '#1c1c1c',
  inputBg: '#2a2a2a',
  borderColor: '#444',
  primary: '#b85c2a',
  mutedText: '#a07050',
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-xl p-5 w-[300px]"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header section with brand and settings access */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <HiOutlineCog className="text-white text-xl" />
      </div>

      {/* Muted row indicating active context or status */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-[#a07050]" size={16} />
        <span className="text-[#a07050] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Primary action section to initiate new design processing */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-white" size={18} />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Input section for Figma API authentication */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1">
          <label className="text-white text-sm">Personal Access Token</label>
          <HiInformationCircle className="text-white/50" size={16} title="Required for accessing your Figma files" />
        </div>
        <input
          className="w-full border rounded px-3 py-2 text-sm text-white/50 outline-none"
          style={{ backgroundColor: COLORS.inputBg, borderColor: COLORS.borderColor }}
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Input section for the specific Figma file to process */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1">
          <label className="text-white text-sm">Design URL</label>
          <HiInformationCircle className="text-white/50" size={16} title="The link to your Figma design file" />
        </div>
        <input
          className="w-full border rounded px-3 py-2 text-sm text-white/50 outline-none"
          style={{ backgroundColor: COLORS.inputBg, borderColor: COLORS.borderColor }}
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons — static display as per smoke test requirements */}
      <div className="flex gap-3 mt-2 mb-6">
        <button
          className="flex-1 text-white font-medium rounded-xl py-2.5 text-sm active:opacity-80 transition-opacity"
          style={{ backgroundColor: COLORS.primary }}
        >
          Awesome
        </button>
        <button
          className="flex-1 text-white font-medium rounded-xl py-2.5 text-sm active:opacity-80 transition-opacity"
          style={{ backgroundColor: COLORS.primary }}
        >
          Prepare
        </button>
      </div>

      {/* List footer for historical data (presently just a placeholder header) */}
      <div>
        <h3 className="text-white font-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

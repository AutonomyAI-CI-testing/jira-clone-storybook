
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a standalone smoke-test component designed to validate the rendering
 * of a Figma-inspired dark theme UI. It uses Tailwind arbitrary values for colors
 * since it bypasses the project's standard semantic token system to match a
 * specific external design reference.
 * 
 * Root element has id="testElem" as required for automated test targeting.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 rounded-lg w-[500px] mx-auto shadow-xl">
      {/* Header Row: Product title and settings entry point */}
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <FiSettings className="text-white w-5 h-5 cursor-pointer" aria-hidden="true" />
      </div>

      {/* Context Row: Provides context about the current transformation scope */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp className="text-[#b45309] w-4 h-4" aria-hidden="true" />
        <span className="text-[#b45309] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Header: Primary action area for adding new designs */}
      <div className="flex items-center gap-2 mt-6">
        <FiChevronUp className="text-white w-5 h-5" aria-hidden="true" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Configuration Form: Input fields for Figma integration credentials */}
      <div className="mt-4 space-y-4">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label htmlFor="pat-input" className="text-[#d1d5db] text-sm cursor-default">Personal Access Token</label>
            <FiInfo className="text-[#9ca3af] w-4 h-4" aria-hidden="true" title="Figma Personal Access Token" />
          </div>
          <input
            id="pat-input"
            className="w-full bg-[#1f1f1f] border border-[#4b5563] text-[#9ca3af] rounded px-3 py-2 text-sm placeholder:text-[#6b7280] focus:outline-none focus:border-[#b45309]"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label htmlFor="url-input" className="text-[#d1d5db] text-sm cursor-default">Design URL</label>
            <FiInfo className="text-[#9ca3af] w-4 h-4" aria-hidden="true" title="Direct link to the Figma file" />
          </div>
          <input
            id="url-input"
            className="w-full bg-[#1f1f1f] border border-[#4b5563] text-[#9ca3af] rounded px-3 py-2 text-sm placeholder:text-[#6b7280] focus:outline-none focus:border-[#b45309]"
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons: Primary interactions for the magic agent */}
      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* History Section: Anchored at the bottom to show previous activity */}
      <div className="mt-8 pt-4 border-t border-white/10">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

export function TestCard() {
  return (
    <div id="testElem" className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto bg-neutral-950 rounded-lg border border-neutral-800 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <h1 className="text-sm font-semibold text-neutral-300">UI magician Agent</h1>
          <button className="p-1 hover:bg-neutral-800 rounded-full transition-colors">
            <AiOutlineSetting size={18} className="text-neutral-400" />
          </button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="space-y-3">
          <button className="flex items-center gap-2 w-full text-left hover:opacity-80 transition-opacity">
            <RiArrowDropDownLine size={16} className="text-neutral-500 flex-shrink-0" />
            <span className="text-sm text-neutral-400">From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-3">
          <button className="flex items-center gap-2 w-full text-left hover:opacity-80 transition-opacity">
            <RiArrowDropDownLine size={16} className="text-neutral-500 flex-shrink-0" />
            <span className="text-sm text-neutral-400">Add New Design</span>
          </button>
        </div>

        {/* Form Section */}
        <div className="space-y-4 py-2">
          {/* Personal Access Token Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
              Personal Access Token
            </label>
            <input
              type="password"
              placeholder="Enter token"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-xs text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          {/* Design URL Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
              Design URL
            </label>
            <input
              type="url"
              placeholder="Enter design URL"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-xs text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 bg-amber-700 hover:bg-amber-600 active:bg-amber-800 text-white text-xs font-semibold py-2 px-4 rounded transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-amber-700 hover:bg-amber-600 active:bg-amber-800 text-white text-xs font-semibold py-2 px-4 rounded transition-colors">
            Prepare
          </button>
        </div>

        {/* Footer Section */}
        <div className="border-t border-neutral-800 pt-4 mt-4">
          <div className="text-xs text-neutral-500">Recent Breakdowns</div>
        </div>
      </div>
    </div>
  );
}

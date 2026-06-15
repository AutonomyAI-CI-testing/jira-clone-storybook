
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

/**
 * TestCard component replicates a design tool plugin panel UI.
 * Used for verifying design-to-code fidelity in Storybook.
 * 
 * Note: Uses arbitrary Tailwind colors to match specific Figma design requirements
 * which deviate from the main application's theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="bg-[#1e1e1e] p-5 w-80 font-sans text-white text-base">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-[#e1e1e1] text-2xl">UI magician Agent</h1>
          <AiOutlineSetting className="text-gray-400 text-lg" aria-hidden="true" />
        </header>

        {/* Collapsible Subtitle State */}
        <div className="flex items-center gap-1 text-[#a3a3a3] mb-8 cursor-default">
          <BiChevronUp className="text-xl" aria-hidden="true" />
          <span className="text-sm truncate">From entire frame to a singl...</span>
        </div>

        {/* Add New Design Section */}
        <section>
          <div className="flex items-center gap-2 mt-4 mb-6">
            <BiChevronUp className="text-white text-xl" aria-hidden="true" />
            <h2 className="font-bold text-[#e1e1e1] text-xl">Add New Design</h2>
          </div>

          {/* Form Fields - Static/Read-only for demo purposes */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <label htmlFor="personalAccessToken" className="text-sm text-white">
                  Personal Access Token
                </label>
                <AiOutlineInfoCircle className="text-gray-400 text-xs" aria-hidden="true" />
              </div>
              <input
                id="personalAccessToken"
                type="text"
                readOnly
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full bg-[#1e1e1e] border border-[#555] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#b85c2c]"
              />
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <label htmlFor="designURL" className="text-sm text-white">
                  Design URL
                </label>
                <AiOutlineInfoCircle className="text-gray-400 text-xs" aria-hidden="true" />
              </div>
              <input
                id="designURL"
                type="text"
                readOnly
                placeholder="https://www.figma.com/file/:"
                className="w-full bg-[#1e1e1e] border border-[#555] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#b85c2c]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <button className="bg-[#b85c2c] hover:bg-[#a04d24] transition-colors text-white rounded-lg px-5 py-2 text-sm font-medium">
              Awesome
            </button>
            <button className="bg-[#b85c2c] hover:bg-[#a04d24] transition-colors text-white rounded-lg px-5 py-2 text-sm font-medium">
              Prepare
            </button>
          </div>
        </section>

        {/* Footer/Recent Activity */}
        <footer>
          <h2 className="font-bold text-white text-lg mt-6">
            Recent Breakdowns
          </h2>
        </footer>
      </div>
    </div>
  );
};

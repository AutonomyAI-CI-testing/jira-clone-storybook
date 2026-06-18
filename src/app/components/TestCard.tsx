
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowUpSLine } from 'react-icons/ri';

/**
 * A self-contained UI card component that replicates the "UI magician Agent" Figma design panel.
 * This is a presentational component used for prototyping and visual regression testing.
 * 
 * Invariants:
 * - Root element id="testElem" is required for automated DOM targeting.
 * - Colors (amber and dark grays) are hardcoded to match the specific Figma reference.
 */
export const TestCard = () => {
  return (
    <section 
      id="testElem" 
      className="bg-[#2a2a2a] text-white p-5 w-80 rounded-lg font-sans shadow-xl"
    >
      {/* Header: Title and Settings */}
      <header className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-xl">UI magician Agent</h1>
        <button type="button" aria-label="Settings">
          <AiOutlineSetting className="text-gray-400 hover:text-white transition-colors" size={22} />
        </button>
      </header>

      {/* Subtitle with status indicator */}
      <div className="flex items-center gap-1 mt-1">
        <RiArrowUpSLine className="text-amber-500" />
        <span className="text-amber-500 text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Visual spacer to match Figma vertical rhythm */}
      <div className="mt-6" />

      {/* Main Section Header */}
      <div className="flex items-center gap-2 mt-4">
        <RiArrowUpSLine className="text-white text-xl" />
        <h2 className="text-white font-semibold text-lg">Add New Design</h2>
      </div>

      {/* Configuration Form */}
      <div className="mt-4 flex flex-col gap-4">
        <FormField 
          id="personalAccessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField 
          id="designURL"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      {/* Action Buttons: Matches the specific orange-brown brand colors from Figma */}
      <div className="flex gap-3 mt-4 justify-center">
        <button 
          type="button"
          className="bg-[#b45309] hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-opacity"
        >
          Awesome
        </button>
        <button 
          type="button"
          className="bg-[#92400e] hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Bottom section for history/logs */}
      <div className="mt-8">
        <h2 className="text-white font-semibold text-lg">Recent Breakdowns</h2>
      </div>
    </section>
  );
};

/**
 * Internal helper for form input groups to ensure consistent spacing and accessibility.
 */
const FormField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-white text-sm">{label}</label>
      <AiOutlineInfoCircle className="text-gray-400 text-sm cursor-help" title={`Information about ${label}`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      readOnly // Technical choice: inputs are currently static/read-only for pure visual prototyping
      className="bg-transparent border border-gray-600 focus:border-amber-700 rounded px-3 py-2 text-gray-500 w-full text-sm outline-none transition-colors"
    />
  </div>
);

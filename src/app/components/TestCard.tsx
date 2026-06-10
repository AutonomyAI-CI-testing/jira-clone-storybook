/**
 * TestCard component represents a UI Magician Agent interface for Figma integrations.
 * It provides fields for Personal Access Token and Design URL, with actions to process the design.
 */
export const TestCard = () => {
  // Constants for consistent styling and accessibility
  const placeholderPat = "figd_xxxxxxxxxxxxxxxxxx";
  const placeholderDesignUrl = "https://www.figma.com/file/:";

  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 font-sans w-[350px]">
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center mb-[34px]">
        <h1 className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</h1>
        <svg className="w-5 h-5 text-[#b5b5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.42-.705 1.056-1.127 1.748-1.127.692 0 1.328.422 1.748 1.127C14.1 5.022 15 6.133 15 7.27a8.99 8.99 0 01-3.67 6.946c-.722.512-1.636.8-2.584.8-.948 0-1.862-.288-2.584-.8C4 11.233 3 10.122 3 8.985c0-1.137.9-2.247 1.424-3.158.42-.705 1.056-1.127 1.748-1.127.692 0 1.328.422 1.748 1.127.42.705 1.056 1.127 1.748 1.127.692 0 1.328-.422 1.748-1.127.42-.705 1.056-1.127 1.748-1.127.692 0 1.328-.422 1.748-1.127C14.1 5.022 15 6.133 15 7.27a8.99 8.99 0 01-3.67 6.946c-.722.512-1.636.8-2.584.8-.948 0-1.862-.288-2.584-.8C4 11.233 3 10.122 3 8.985c0-1.137.9-2.247 1.424-3.158zM12 18a6 6 0 100-12 6 6 0 000 12z"></path>
        </svg>
      </div>

      {/* Breadcrumb/Status: Indication of current scope */}
      <div className="flex items-center gap-2 mb-[90px]">
        <svg className="w-4 h-4 text-[#8b9291]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <p className="text-[#8b9291]">From entire frame to a singl...</p>
      </div>

      {/* Accordion-style Header: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-[#b2b2b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <h2 className="text-[#b2b2b1] font-bold text-md">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-[#a4a4a3] text-sm font-medium mb-2">
          Personal Access Token <span className="text-[#a4a4a3] text-xs" title="Find this in Figma settings">ⓘ</span>
        </label>
        <input
          type="password"
          id="pat"
          placeholder={placeholderPat}
          className="w-full p-2 bg-[#272822] text-[#737470] border border-[#a5adad] rounded outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <label htmlFor="designUrl" className="block text-[#a3a3a2] text-sm font-medium mb-2">
          Design URL <span className="text-[#a3a3a2] text-xs" title="Paste the Figma file URL">ⓘ</span>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder={placeholderDesignUrl}
          className="w-full p-2 bg-[#272822] text-[#71726e] border-2 border-[#929291] rounded outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Action Buttons: Dual CTA for high-visibility operations */}
      <div className="flex gap-4 mb-[85px]">
        <button className="flex-1 py-2 px-4 bg-[#843a17] hover:bg-[#a64a1d] text-white/80 rounded-md font-medium transition-colors">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-[#843a17] hover:bg-[#a64a1d] text-white/80 rounded-md font-medium transition-colors">
          Prepare
        </button>
      </div>

      {/* History Section */}
      <div>
        <h3 className="text-[#b0b0b0] font-bold text-md border-t border-[#3a3a3a] pt-4">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

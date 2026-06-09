/**
 * UI magician Agent - Design Import Card
 * 
 * Provides an interface for users to import Figma designs using a PAT and URL.
 * Designed with a high-contrast dark theme (Zinc/Orange) to match the agentic UI style.
 */
const TestCard = () => {
  // SVG Icon constants for clarity and reuse
  const AgentIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,216,160ZM48,152H40a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm120,56a8,8,0,0,1-8,8h-64a8,8,0,0,1,0-16h64A8,8,0,0,1,168,208ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,40ZM197.66,69.66,192,75.31A8,8,0,0,1,180.69,64l5.65-5.66a8,8,0,0,1,11.32,11.32ZM58.34,197.66l5.66-5.66A8,8,0,0,1,75.31,203.31l-5.65,5.66a8,8,0,0,1-11.32-11.31ZM197.66,186.34a8,8,0,0,1,0,11.32l-5.66,5.65A8,8,0,0,1,180.69,192l5.65-5.66A8,8,0,0,1,197.66,186.34ZM58.34,58.34a8,8,0,0,1,11.32,0l5.65,5.66A8,8,0,0,1,64,75.31l-5.66-5.65A8,8,0,0,1,58.34,58.34Z"></path>
    </svg>
  );

  return (
    <div id="testElem" className="p-6 bg-zinc-900 text-gray-100 min-h-screen w-full flex flex-col items-center justify-start overflow-auto">
      <div className="w-full max-w-md bg-zinc-800/50 p-6 rounded-lg shadow-xl border border-zinc-700">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
          <div className="w-8 h-8 text-orange-500">
            {AgentIcon}
          </div>
        </header>

        <div className="flex items-center text-gray-300 mb-8 border-b border-zinc-700 pb-4">
          <h2 className="text-lg">From entire frame to a single component...</h2>
        </div>

        {/* Add New Design Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Add New Design</h2>

          {/* Form Fields */}
          <div className="mb-6">
            <label htmlFor="pat" className="block text-gray-200 text-sm font-bold mb-2">
              Personal Access Token
            </label>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
              className="w-full bg-zinc-900 border border-zinc-600 rounded py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="designUrl" className="block text-gray-200 text-sm font-bold mb-2">
              Design URL
            </label>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file:/..."
              className="w-full bg-zinc-900 border border-zinc-600 rounded py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-4 mb-8">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded transition-colors flex-1 shadow-lg">
              Awesome
            </button>
            {/* Outline variant for secondary action to provide visual contrast */}
            <button className="border border-orange-600 text-orange-500 hover:bg-orange-600/10 font-bold py-3 px-4 rounded transition-colors flex-1">
              Prepare
            </button>
          </div>
        </section>

        {/* Recent Breakdowns */}
        <footer className="pt-6 border-t border-zinc-700">
          <h2 className="text-xl font-semibold text-white">Recent Breakdowns</h2>
          <div className="mt-4 text-zinc-500 text-sm italic">No recent breakdowns found</div>
        </footer>
      </div>
    </div>
  );
};

export default TestCard;


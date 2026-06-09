export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-4 text-white">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <span className="text-lg">⚙</span>
      </div>

      {/* Expandable Section 1 */}
      <div className="mb-6 flex items-center">
        <span className="mr-2 text-lg">^</span>
        <p className="text-gray-400">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="mb-4 flex items-center">
          <span className="mr-2 text-lg">^</span>
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="token" className="mb-2 block text-sm">
            Personal Access Token{" "}
            <span className="text-gray-400 ml-1 inline-block">ℹ</span>
          </label>
          <input
            type="text"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-gray-700 border-gray-600 w-full rounded border p-2 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="mb-2 block text-sm">
            Design URL{" "}
            <span className="text-gray-400 ml-1 inline-block">ℹ</span>
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://www.figma.com/file/:"
            className="bg-gray-700 border-gray-600 w-full rounded border p-2 text-white"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex space-x-4">
        <button className="flex-1 rounded bg-[#b5541e] py-2 font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#b5541e] py-2 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

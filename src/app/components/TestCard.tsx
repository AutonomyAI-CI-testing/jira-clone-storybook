/**
 * TestCard — self-contained smoke-test component matching the "UI magician Agent" Figma design.
 * Accepts no props; all content is hardcoded.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <span className="text-[#b5b5b5] text-lg" aria-hidden="true">⚙</span>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-[#8b9291] mr-2" aria-hidden="true">∧</span>
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</p>
      </div>

      <div className="flex items-center mb-4 mt-6">
        <span className="text-[#b2b2b1] mr-2" aria-hidden="true">∧</span>
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="accessToken" className="text-[#a4a4a3] text-[11.5px] font-semibold mr-2">Personal Access Token</label>
          <span className="text-[#a4a4a3]" aria-hidden="true">ⓘ</span>
        </div>
        <input
          id="accessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#1a1a1a] border border-[#3a3a3a] text-[#737470] text-[11.5px] font-semibold"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designURL" className="text-[#a3a3a2] text-[11.5px] font-semibold mr-2">Design URL</label>
          <span className="text-[#a3a3a2]" aria-hidden="true">ⓘ</span>
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#1a1a1a] border border-[#3a3a3a] text-[#71726e] text-[10.5px] font-semibold"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <button type="button" className="bg-[#7a3a1e] text-[#d4b8a8] rounded-lg px-6 py-2 text-[11.5px] font-semibold hover:opacity-90">Awesome</button>
        <button type="button" className="bg-[#7a3a1e] text-[#d4b8a8] rounded-lg px-6 py-2 text-[11.5px] font-semibold hover:opacity-90">Prepare</button>
      </div>

      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
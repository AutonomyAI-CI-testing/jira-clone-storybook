import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 min-h-screen text-white">

      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h1>
        <FiSettings className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-1 mb-4">
        <FiChevronUp className="text-[#a07060]" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</p>
      </div>

      <div className="h-4" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-1 mb-4">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h2 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3] text-[10px]" />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] rounded px-3 py-2 text-[11.5px] font-semibold placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</label>
          <FiInfo className="text-[#a3a3a2] text-[10px]" />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] rounded px-3 py-2 text-[11.5px] font-semibold placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-start mb-8">
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded-md px-6 py-2.5 text-[11.5px]">Awesome</button>
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded-md px-6 py-2.5 text-[11.5px]">Prepare</button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h2 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h2>

    </div>
  );
};

export { TestCard };
export default TestCard;

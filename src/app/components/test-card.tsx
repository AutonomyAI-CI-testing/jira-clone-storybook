import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';


export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full min-h-screen bg-[#252525] p-2">
      <div className="flex justify-between items-center px-4 py-5">
        <h1 className="text-[#b5b5b5] font-semibold text-xl">UI magician Agent</h1>
        <IoSettingsOutline className="text-[#b5b5b5] text-2xl" />
      </div>
      <div className="flex items-center gap-2 px-4 pb-4 text-[#a07060]">
        <FiChevronUp />
        <span>From entire frame to a single component...</span>
      </div>
      <div className="mt-10 flex items-center gap-2 px-4 py-3 text-[#b2b2b1]">
        <FiChevronUp />
        <h2 className="font-bold">Add New Design</h2>
      </div>
      <div className="px-4 py-2 space-y-5">
        <div>
          <div className="flex items-center gap-2 text-[#a4a4a3] mb-3">
            <label htmlFor="token">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-base" />
          </div>
          <input
            type="text"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-3 rounded-sm bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470]"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 text-[#a4a4a3] mb-3">
            <label htmlFor="design-url">Design URL</label>
            <AiOutlineInfoCircle className="text-base" />
          </div>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-3 rounded-sm bg-[#272822] border-2 border-[#929291] text-[#737470] placeholder-[#737470]"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center px-4 py-6">
        <button className="bg-[#843a17] text-[#c8a090] rounded-lg px-8 py-4 font-semibold text-base">Awesome</button>
        <button className="bg-[#843a17] text-[#c8a090] rounded-lg px-8 py-4 font-semibold text-base">Prepare</button>
      </div>
      <div className="px-4 pt-4 pb-8">
        <h3 className="text-[#b0b0b0] font-semibold text-xl">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

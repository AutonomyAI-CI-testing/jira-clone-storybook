import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] p-5 text-[#e8e8e8]"
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold">UI magician Agent</span>
      <FiSettings size={22} className="text-[#e8e8e8]" />
    </div>

    {/* Subtitle row */}
    <div className="mt-2 flex items-center gap-2">
      <FiChevronUp size={14} className="text-[#c47a55]" />
      <span className="text-sm italic text-[#c47a55]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Spacer */}
    <div className="mt-10" />

    {/* Section header */}
    <div className="mb-4 flex items-center gap-2">
      <FiChevronUp size={16} />
      <span className="text-base font-bold">Add New Design</span>
    </div>

    {/* Personal Access Token field */}
    <div className="mb-1 flex items-center gap-2">
      <span className="text-sm">Personal Access Token</span>
      <AiOutlineInfoCircle size={15} className="text-[#e8e8e8]" />
    </div>
    <input
      className="mb-3 w-full border border-[#A5ADAD] bg-[#272822] px-3 py-2 text-sm text-[#888] placeholder:text-[#888] focus:outline-none"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      readOnly
    />

    {/* Design URL field */}
    <div className="mb-1 flex items-center gap-2">
      <span className="text-sm">Design URL</span>
      <AiOutlineInfoCircle size={15} className="text-[#e8e8e8]" />
    </div>
    <input
      className="mb-5 w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-sm text-[#888] placeholder:text-[#888] focus:outline-none"
      placeholder="https://www.figma.com/file/:"
      readOnly
    />

    {/* Buttons */}
    <div className="mb-10 flex gap-3 pl-2">
      <button className="rounded-md bg-[#843A17] px-6 py-2 text-sm font-bold text-[#e8e8e8]">
        Awesome
      </button>
      <button className="rounded-md bg-[#843A17] px-6 py-2 text-sm font-bold text-[#e8e8e8]">
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div className="mt-2">
      <span className="text-base font-bold">Recent Breakdowns</span>
    </div>
  </div>
);

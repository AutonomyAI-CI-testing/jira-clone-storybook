
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-elevation-surface-sunken p-5 w-[320px] rounded text-font">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-font">UI magician Agent</h1>
        <IoSettingsOutline className="text-icon-subtle" size={20} />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 text-[#c97a50] text-sm">
        <FiChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="my-6" /> {/* Spacer */}

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-font" />
        <h2 className="font-bold text-font">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="pat-input" className="text-sm">Personal Access Token</label>
        <AiOutlineInfoCircle size={16} className="text-icon-subtle" />
      </div>
      <input
        id="pat-input"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-elevation-surface-overlay border border-border-input rounded px-3 py-2 text-font-subtle w-full outline-none mb-4"
      />

      {/* Design URL Input */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="design-url-input" className="text-sm">Design URL</label>
        <AiOutlineInfoCircle size={16} className="text-icon-subtle" />
      </div>
      <input
        id="design-url-input"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="bg-elevation-surface-overlay border border-border-input rounded px-3 py-2 text-font-subtle w-full outline-none mb-6"
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="bg-background-danger-bold text-font-inverse rounded-lg py-3 px-6 font-semibold flex-1">
          Awesome
        </button>
        <button className="bg-background-danger-bold text-font-inverse rounded-lg py-3 px-6 font-semibold flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="font-bold text-font mt-6">Recent Breakdowns</h3>
    </div>
  );
};

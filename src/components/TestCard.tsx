
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-[320px] p-4 rounded-xl flex flex-col gap-4 text-sm" style={{ backgroundColor: '#1d2125', color: '#b6c2cf' }}>
      {/* Header: title + settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-xl" />
      </div>

      {/* Collapsible row: chevron + muted orange text */}
      <div className="flex items-center mb-6">
        <RiArrowUpSLine className="text-xl mr-2" />
        <span className="text-[#faa53d] text-sm">From entire frame to a singl...</span>
      </div>

      <div className="mb-6" />{/* Spacer */}

      {/* Add New Design section */}
      <div className="flex items-center mb-4">
        <RiArrowUpSLine className="text-xl mr-2" />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-4">
        <label className="flex items-center text-sm mb-2">
          Personal Access Token
          <AiOutlineInfoCircle className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 text-sm" style={{ backgroundColor: '#22272b', border: '1px solid #454f59', borderRadius: '0.5rem', color: '#9aa5b4' }}
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <label className="flex items-center text-sm mb-2">
          Design URL
          <AiOutlineInfoCircle className="ml-1 text-xs" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2 text-sm" style={{ backgroundColor: '#22272b', border: '1px solid #454f59', borderRadius: '0.5rem', color: '#9aa5b4' }}
        />
      </div>

      {/* Buttons: Awesome | Prepare */}
      <div className="flex gap-3 mb-6">
        <button className="px-5 py-2.5 font-medium flex-grow" style={{ backgroundColor: '#974f0c', color: '#dee4ea', borderRadius: '0.5rem' }}>
          Awesome
        </button>
        <button className="px-5 py-2.5 font-medium flex-grow" style={{ backgroundColor: '#974f0c', color: '#dee4ea', borderRadius: '0.5rem' }}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="flex flex-col w-full min-h-screen p-5"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-primary-black text-2xl text-white">
            UI magician Agent
          </h1>
          <AiOutlineSetting className="text-white" size={26} />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2 mb-8">
          <BsChevronUp size={14} style={{ color: "#a07850" }} />
          <span
            className="font-primary text-sm truncate"
            style={{ color: "#a07850" }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div
          className="flex items-center gap-3 px-4 py-4 rounded-md mb-6"
          style={{ backgroundColor: "#333333" }}
        >
          <BsChevronUp size={18} className="text-white" />
          <h2 className="font-primary-black text-xl text-white">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="font-primary-bold text-sm text-white">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle size={18} className="text-white opacity-70" />
          </div>
          <input
            className="w-full rounded px-3 py-3 font-primary text-sm text-white outline outline-1 bg-transparent placeholder:text-white placeholder:opacity-40 focus:outline-white"
            style={{ outlineColor: "#666666" }}
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="font-primary-bold text-sm text-white">
              Design URL
            </label>
            <AiOutlineInfoCircle size={18} className="text-white opacity-70" />
          </div>
          <input
            className="w-full rounded px-3 py-3 font-primary text-sm text-white outline outline-1 bg-transparent placeholder:text-white placeholder:opacity-40 focus:outline-white"
            style={{ outlineColor: "#666666" }}
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Buttons row */}
        <div className="flex gap-4 justify-center mb-10">
          <button
            className="flex-1 py-3 px-6 rounded-lg font-primary-bold text-base text-white cursor-pointer"
            style={{ backgroundColor: "#c0622a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 px-6 rounded-lg font-primary-bold text-base text-white cursor-pointer"
            style={{ backgroundColor: "#c0622a" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns heading */}
        <h2 className="font-primary-black text-2xl text-white">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

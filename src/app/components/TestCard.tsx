import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
          id="testElem"
          className="w-[320px] p-4 rounded-none" style={{ backgroundColor: '#161613' }}>

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold" style={{ color: '#babab2' }}>UI magician Agent</h2>
            <AiOutlineSetting className="text-xl" style={{ color: '#babab2' }} />
          </div>

          {/* Subtitle Row */}
          <div className="flex items-center mb-4">
            <FiChevronUp className="text-lg mr-2" style={{ color: '#72726b' }} />
            <span className="text-sm" style={{ color: '#72726b' }}>From entire frame to a singl...</span>
          </div>

          {/* Add New Design Section */}
          <div className="flex items-center mb-4 pt-4 border-t" style={{ borderColor: '#333333' }}>
            <FiChevronUp className="text-lg mr-2" style={{ color: '#babab2' }} />
            <h3 className="text-md font-bold" style={{ color: '#babab2' }}>Add New Design</h3>
          </div>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="pat" className="text-sm flex items-center mb-2" style={{ color: '#72726b' }}>
              Personal Access Token <AiOutlineInfoCircle className="ml-1" style={{ color: '#babab2' }} />
            </label>
            <input
              id="pat"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full p-2 rounded-none border"
              style={{ backgroundColor: '#242421', borderColor: '#444444', color: '#babab2' }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="designUrl" className="text-sm flex items-center mb-2" style={{ color: '#72726b' }}>
              Design URL <AiOutlineInfoCircle className="ml-1" style={{ color: '#babab2' }} />
            </label>
            <input
              id="designUrl"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2 rounded-none border"
              style={{ backgroundColor: '#242421', borderColor: '#444444', color: '#babab2' }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 mb-6">
            <button className="flex-1 p-2 rounded-md font-semibold" style={{ backgroundColor: '#8a4022', color: '#111111' }}>Awesome</button>
            <button className="flex-1 p-2 rounded-md font-semibold" style={{ backgroundColor: '#8a4022', color: '#111111' }}>Prepare</button>
          </div>

          {/* Recent Breakdowns */}
          <div>
            <h3 className="text-md font-semibold" style={{ color: '#babab2' }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

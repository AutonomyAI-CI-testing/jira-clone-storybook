import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 w-[400px] font-sans" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[13.5px]" style={{ color: '#b5b5b5', fontFamily: 'Inter' }}>
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-lg" style={{ color: '#b5b5b5' }} />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mt-4">
        <FiChevronUp className="text-sm" style={{ color: '#8b9291' }} />
        <span className="font-semibold text-[11.5px]" style={{ color: '#8b9291' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-6"></div>

      {/* Add New Design Section */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <FiChevronUp className="text-base" style={{ color: '#b2b2b1' }} />
          <span className="font-semibold text-[13.5px]" style={{ color: '#b2b2b1' }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token Input Block */}
        <div className="mt-4">
          <label className="flex items-center gap-1 text-[11.5px] font-semibold" style={{ color: '#a4a4a3' }}>
            Personal Access Token <FiInfo className="text-xs" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 mt-1 rounded text-[11.5px] placeholder:text-[11.5px] placeholder:text-[#737470] focus:outline-none"
            style={{
              backgroundColor: '#272822',
              border: '1px solid #a5adad',
              color: '#ffffff',
            }}
          />
        </div>

        {/* Design URL Input Block */}
        <div className="mt-4">
          <label className="flex items-center gap-1 text-[11.5px] font-semibold" style={{ color: '#a3a3a2' }}>
            Design URL <FiInfo className="text-xs" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 mt-1 rounded text-[11.5px] placeholder:text-[11.5px] placeholder:text-[#71726e] focus:outline-none"
            style={{
              backgroundColor: '#272822',
              border: '2px solid #929291',
              color: '#ffffff',
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mt-4">
          <button
            className="flex-1 py-2 rounded-lg font-semibold text-[13.5px]"
            style={{ backgroundColor: '#843a17', color: '#8c8078' }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded-lg font-semibold text-[13.5px]"
            style={{ backgroundColor: '#843a17', color: '#8c8078' }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Heading */}
      <div className="mt-6">
        <span className="font-semibold text-[13.5px]" style={{ color: '#b0b0b0' }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

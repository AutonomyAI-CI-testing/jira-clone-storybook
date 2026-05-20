import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const TestCard = (): JSX.Element => {
  const [firstSectionOpen, setFirstSectionOpen] = useState(true);
  const [secondSectionOpen, setSecondSectionOpen] = useState(true);

  return (
    <div className="w-[430px]" style={{ backgroundColor: '#1c1c1c' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <h1 className="text-[16px] font-bold" style={{ color: '#c5c5c5' }}>
          UI magician Agent
        </h1>
        <IoSettingsOutline style={{ color: '#9a9a9a' }} size={20} />
      </div>

      {/* First Collapsible Section */}
      <div className="mt-2 px-4">
        <button
          onClick={() => setFirstSectionOpen(!firstSectionOpen)}
          className="flex w-full items-center gap-2 py-2 text-left"
        >
          {firstSectionOpen ? (
            <MdKeyboardArrowUp size={14} style={{ color: '#a0a0a0' }} />
          ) : (
            <MdKeyboardArrowDown size={14} style={{ color: '#a0a0a0' }} />
          )}
          <span className="text-[13px] font-medium" style={{ color: '#a0a0a0' }}>
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Second Collapsible Section - Add New Design */}
      <div className="mt-12 px-4">
        <button
          onClick={() => setSecondSectionOpen(!secondSectionOpen)}
          className="flex w-full items-center gap-2 py-2 text-left"
        >
          {secondSectionOpen ? (
            <MdKeyboardArrowUp size={16} style={{ color: '#c0c0c0' }} />
          ) : (
            <MdKeyboardArrowDown size={16} style={{ color: '#c0c0c0' }} />
          )}
          <span className="text-[15px] font-bold" style={{ color: '#c0c0c0' }}>
            Add New Design
          </span>
        </button>

        {secondSectionOpen && (
          <div className="mt-6 px-3">
            {/* Personal Access Token */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <label className="text-[13px] font-semibold" style={{ color: '#b0b0b0' }}>
                  Personal Access Token
                </label>
                <button className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#6b6b6b] text-[11px]" style={{ color: '#9a9a9a' }}>
                  i
                </button>
              </div>
              <input
                type="text"
                value="figd_xxxxxxxxxxxxxxxxxx"
                readOnly
                className="w-full rounded border border-[#6b6b6b] bg-[#272822] px-4 py-3 text-[13px] font-medium"
                style={{ color: '#7a7a7a' }}
              />
            </div>

            {/* Design URL */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <label className="text-[13px] font-semibold" style={{ color: '#b0b0b0' }}>
                  Design URL
                </label>
                <button className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#6b6b6b] text-[11px]" style={{ color: '#9a9a9a' }}>
                  i
                </button>
              </div>
              <input
                type="text"
                value="https://www.figma.com/file/:"
                readOnly
                className="w-full rounded border border-[#6b6b6b] bg-[#272822] px-4 py-3 text-[13px] font-medium"
                style={{ color: '#7a7a7a' }}
              />
            </div>

            {/* Buttons */}
            <div className="mb-8 mt-2 flex gap-4">
              <button className="flex-1 rounded-md px-6 py-3 text-[14px] font-semibold" style={{ backgroundColor: '#9a4419', color: '#e8a080' }}>
                Awesome
              </button>
              <button className="flex-1 rounded-md px-6 py-3 text-[14px] font-semibold" style={{ backgroundColor: '#9a4419', color: '#e8a080' }}>
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-10 px-5 pb-6">
        <h2 className="text-[16px] font-bold" style={{ color: '#c5c5c5' }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

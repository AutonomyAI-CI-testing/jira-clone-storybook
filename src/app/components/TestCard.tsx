import { FaChevronUp } from "react-icons/fa";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] font-primary"
  >
    {/* Top strip of the frame */}
    <div className="h-[9px] w-full bg-[#161613]" />

    <div className="flex flex-col px-5 pb-6 pt-[11px]">
      {/* y=20 — title row */}
      <div className="flex h-[16px] items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center text-[#b5b5b5]"
        >
          <IoSettingsOutline size={16} />
        </button>
      </div>

      {/* y=54 — frame summary row */}
      <div className="mt-[18px] flex h-[14px] items-center gap-[9px]">
        <FaChevronUp size={8} aria-hidden="true" className="text-[#8b9291]" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* y=145 — section heading */}
      <div className="mt-[77px] flex h-[16px] items-center gap-[5px]">
        <FaChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* y=189 — token label */}
      <div className="mt-[28px] flex h-[14px] items-center gap-[10px]">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-[#a4a4a3]"
        />
      </div>

      {/* y=215 — token field */}
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* y=262 — design url label */}
      <div className="mt-[11px] flex h-[14px] items-center gap-[10px]">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-[#a3a3a2]"
        />
      </div>

      {/* y=287 — design url field */}
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* y=346 — actions */}
      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* y=430 — recent breakdowns */}
      <div className="mt-[47px] h-[16px]">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);

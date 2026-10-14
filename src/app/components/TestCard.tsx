import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained, non-interactive reproduction of the "UI magician Agent"
 * Figma panel. Smoke test only — it takes no props, holds no state and is not
 * wired into the app.
 */
export const TestCard = () => (
  <div id="testElem" className="inline-block">
    <div className="w-[254px] bg-[#000000] px-5 pt-5 pb-16 font-primary">
      <div className="flex items-start justify-between">
        <p className="font-primary-black text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </p>
        <FiSettings aria-hidden size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp aria-hidden size={12} className="shrink-0 text-[#8b9291]" />
        <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FiChevronUp aria-hidden size={12} className="shrink-0 text-[#b2b2b1]" />
        <p className="font-primary-black text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </p>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo aria-hidden size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo aria-hidden size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <div className="mt-3 flex h-9 w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex justify-end gap-4">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      <p className="mt-[46px] font-primary-black text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  </div>
);

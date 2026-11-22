import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Figma palette values — none of these map to a semantic token in this repo.
const fieldClass = "flex w-full items-center rounded-sm bg-[#272822] px-[19px]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-black pb-[62px] font-primary">
      {/* Top strip */}
      <div className="h-[9px] w-full bg-[#141414]" />

      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-[11px]">
        <h2 className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Agent settings"
          className="text-[#b5b5b5]"
        >
          <FiSettings size={16} />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-2 px-5">
        <FiChevronUp
          size={10}
          aria-hidden="true"
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-2 px-5">
        <FiChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[#b2b2b1]"
        />
        <h3 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 px-5">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#a4a4a3]"
          />
        </div>
        <div className={`${fieldClass} mt-3 h-9 border border-[#a5adad]`}>
          <span className="text-[11.5px] leading-[14px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] px-5">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#a3a3a2]"
          />
        </div>
        <div
          className={`${fieldClass} mt-[11px] h-[37px] border-2 border-[#929291]`}
        >
          <span className="text-[10.5px] leading-[13px] text-[#71726e]">
            https://www.figma.com/file/
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="ml-6 mt-[22px] flex gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[47px] px-5 font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

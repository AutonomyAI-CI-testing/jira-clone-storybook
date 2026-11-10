import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Smoke test only: no props, no state, no data, no interaction.
 *
 * The frame's palette is a dark dev-tool surface and shares no names with this
 * repo's token set, so its colours go in as arbitrary values. Icons are Feather
 * outline glyphs, the closest match to the frame's exported rasters.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="box-border flex min-h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 font-primary"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#d0d0d0]"
        />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center">
        <FiChevronUp
          size={12}
          aria-hidden="true"
          className="mr-2 shrink-0 text-[#8b9291]"
        />
        <span
          title="From entire frame to a single component"
          className="min-w-0 flex-1 truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[74px] flex items-center">
        <FiChevronUp
          size={15}
          aria-hidden="true"
          className="mr-2 shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-4">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-4">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="ml-6 mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

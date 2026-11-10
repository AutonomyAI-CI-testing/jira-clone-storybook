import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ICON_COLOR = "text-[#c9c9c9]";

/**
 * TestCard
 *
 * A static, self-contained reproduction of the "UI magician Agent" panel from
 * the referenced Figma frame. It accepts no props, holds no state and is not
 * wired into any route — it exists to be rendered on its own.
 *
 * The frame is a different visual language from this app's design system
 * (dark ground, Inter, rust buttons), so the design's own palette and type are
 * written as Tailwind arbitrary values rather than the semantic tokens in
 * `src/app/styles/app.css`.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px]">
    <div className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-[20px] [font-family:Inter,ui-sans-serif,system-ui,sans-serif]">
      {/* Panel title */}
      <div className="flex items-start justify-between pt-[20px]">
        <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} aria-hidden="true" className={ICON_COLOR} />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[3px] pl-[3px]">
        <FiChevronUp
          size={14}
          aria-hidden="true"
          className={`shrink-0 ${ICON_COLOR}`}
        />
        <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[4px]">
        <FiChevronUp
          size={14}
          aria-hidden="true"
          className={`shrink-0 ${ICON_COLOR}`}
        />
        <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[27px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={15} aria-hidden="true" className={ICON_COLOR} />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-[211px] border-[1px] border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] leading-[13.92px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[10px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={15} aria-hidden="true" className={ICON_COLOR} />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-[2px] border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] leading-[12.71px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent */}
      <div className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);

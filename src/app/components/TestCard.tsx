import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * A self-contained reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke test only: it takes no props, holds no state and reads no data, so it
 * renders the same wherever it is placed. The frame's colours have no matching
 * design token (they are a third-party dark palette, not one of this app's
 * themed surfaces), so they are written as Tailwind arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1C1D17] px-5 py-5 font-primary-bold text-[13.5px] leading-[1.21] text-[#b5b5b5]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-4 items-center justify-center text-[#b5b5b5]"
      >
        <FaCog aria-hidden="true" size={15} />
      </button>
    </div>

    {/* Frame description */}
    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={8} />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 flex items-center gap-2">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={12} />
      <span className="text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FaInfoCircle
        aria-hidden="true"
        className="shrink-0 text-[#a4a4a3]"
        size={15}
      />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <FaInfoCircle
        aria-hidden="true"
        className="shrink-0 text-[#a3a3a2]"
        size={15}
      />
    </div>
    <div className="mt-3 flex h-9 items-center border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    {/* Actions */}
    <div className="mt-5 flex justify-end gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-12 text-[#b0b0b0]">Recent Breakdowns</span>
  </div>
);

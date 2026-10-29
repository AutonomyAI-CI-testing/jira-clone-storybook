import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_LABEL = "text-2xs text-[#a4a4a3]";

const TEXT_INPUT =
  "h-9 w-full bg-[#272822] px-[19px] text-2xs text-[#737470] placeholder:text-[#737470] focus:outline-none";

const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] px-4 text-left text-2xs text-[#8c8078]";

/**
 * Static reproduction of the "UI magician Agent" panel from the referenced
 * Figma frame. Self-contained by design: no props, no state and no data.
 *
 * The frame's palette has no matching semantic token in this project and the
 * Tailwind theme is deliberately closed to role namespaces, so the frame's own
 * colour values are used directly.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1c1d17] p-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-sm text-[#b5b5b5]">UI magician Agent</h1>
      <FiSettings aria-hidden="true" className="text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-2xs text-[#8b9291]">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={10} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={14} />
      <h2 className="text-sm">Add New Design</h2>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-4">
        <label htmlFor="testElem-token" className={FIELD_LABEL}>
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
          size={15}
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx("mt-3 border border-[#a5adad]", TEXT_INPUT)}
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-4">
        <label htmlFor="testElem-url" className={FIELD_LABEL}>
          Design URL
        </label>
        <FiInfo
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
          size={15}
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={cx("mt-3 border-2 border-[#929291]", TEXT_INPUT)}
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] text-sm text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);

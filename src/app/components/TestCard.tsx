import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Values below come from the Figma frame's extracted style guide (254 x 508 logical px).
const PANEL_BG = "bg-black";
const LABEL_ROW_CLASS = "flex items-center gap-2";

const FIELD_CLASS =
  "w-full rounded bg-[#272822] px-5 text-2xs text-[#737470] placeholder:text-[#737470]";

const BUTTON_CLASS =
  "flex h-10 w-[87px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      PANEL_BG,
      "w-[254px] px-5 pb-16 pt-5 font-primary-bold text-[#b5b5b5]"
    )}
  >
    {/* Title */}
    <div className="flex items-center justify-between">
      <span className="text-xs">UI magician Agent</span>
      <FiSettings aria-hidden size={16} />
    </div>

    {/* Collapsed summary */}
    <div className={cx(LABEL_ROW_CLASS, "mt-[18px] text-[#8b9291]")}>
      <FiChevronUp aria-hidden size={12} />
      <span className="min-w-0 flex-1 truncate text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className={cx(LABEL_ROW_CLASS, "mt-[73px] text-[#b2b2b1]")}>
      <FiChevronUp aria-hidden size={14} />
      <span className="text-xs">Add New Design</span>
    </div>

    {/* Personal access token */}
    <div className="mt-[28px]">
      <div className={cx(LABEL_ROW_CLASS, "text-[#a4a4a3]")}>
        <label className="text-2xs" htmlFor="testElem-token">
          Personal Access Token
        </label>
        <FiInfo aria-hidden size={15} />
      </div>
      <input
        id="testElem-token"
        className={cx(FIELD_CLASS, "mt-[10px] h-9 border border-[#a5adad]")}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px]">
      <div className={cx(LABEL_ROW_CLASS, "text-[#a4a4a3]")}>
        <label className="text-2xs" htmlFor="testElem-design-url">
          Design URL
        </label>
        <FiInfo aria-hidden size={15} />
      </div>
      <input
        id="testElem-design-url"
        className={cx(FIELD_CLASS, "mt-[9px] h-[37px] border-2 border-[#929291]")}
        placeholder="https://www.figma.com/file/"
        type="text"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-[14px] pl-6">
      <button className={BUTTON_CLASS} type="button">
        Awesome
      </button>
      <button className={BUTTON_CLASS} type="button">
        Prepare
      </button>
    </div>

    {/* Recent breakdowns */}
    <p className="mt-[46px] text-xs text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);

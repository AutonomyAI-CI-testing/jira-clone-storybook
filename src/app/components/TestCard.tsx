import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const TITLE_CLASS = "font-primary-bold text-[13.5px] leading-[16.34px]";
const LABEL_CLASS = "font-primary-bold text-[11.5px] leading-[13.92px]";

/**
 * Smoke-test card built from the "UI magician Agent" Figma frame.
 *
 * Deliberately off-system and self-contained: it takes no props, uses arbitrary
 * colour values (the frame's palette has no semantic token equivalent) and is
 * identical under every theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className={`${TITLE_CLASS} text-[#b5b5b5]`}>UI magician Agent</span>
      <RiSettings3Line size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center">
      <RiArrowUpSLine size={14} className="text-[#8b9291]" />
      <span className={`ml-1 ${LABEL_CLASS} text-[#8b9291]`}>
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center">
      <RiArrowUpSLine size={16} className="text-[#b2b2b1]" />
      <span className={`ml-1 ${TITLE_CLASS} text-[#b2b2b1]`}>
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center justify-between">
      <span className={`${LABEL_CLASS} text-[#a4a4a3]`}>
        Personal Access Token
      </span>
      <RiInformationLine size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] ${LABEL_CLASS} text-[#737470] outline-none placeholder:text-[#737470]`}
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center">
      <span className={`${LABEL_CLASS} text-[#a3a3a2]`}>Design URL</span>
      <RiInformationLine size={15} className="ml-2 text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className={`h-[37px] w-[85px] rounded bg-[#843a17] ${LABEL_CLASS} text-[#8c8078]`}
      >
        Awesome
      </button>
      <button
        type="button"
        className={`h-[37px] w-[85px] rounded bg-[#843a17] ${LABEL_CLASS} text-[#8c8078]`}
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className={`mt-[47px] ${TITLE_CLASS} text-[#b0b0b0]`}>
      Recent Breakdowns
    </span>
  </div>
);

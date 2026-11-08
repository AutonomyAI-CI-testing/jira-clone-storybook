import cx from "classix";

const GearGlyph = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="8" cy="8" r="2.6" strokeWidth="1.4" />
    <circle cx="8" cy="8" r="5.4" strokeWidth="1.4" strokeDasharray="1.6 1.7" />
  </svg>
);

const CollapseGlyph = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0 text-[#8b9291]"
  >
    <path
      d="M.8 3.8 4 1l3.2 2.8"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionGlyph = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0 text-[#b2b2b1]"
  >
    <path
      d="M1.4 6 6 2l4.6 4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.5" strokeWidth="1.2" />
    <path d="M7.5 6.9v3.8" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const labelRowClass = "flex items-center gap-2 text-2xs text-[#a4a4a3]";
const fieldClass = "w-full bg-[#272822] px-[21px]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pb-8 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <GearGlyph />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <CollapseGlyph />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <SectionGlyph />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className={cx(labelRowClass, "mt-[28px]")}>
      <span>Personal Access Token</span>
      <InfoGlyph />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        fieldClass,
        "mt-[10px] h-[39px] border border-[color:#a5adad] text-2xs text-[#737470] placeholder:text-[#737470]"
      )}
    />

    <div className={cx(labelRowClass, "mt-[10px]")}>
      <span>Design URL</span>
      <InfoGlyph />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={cx(
        fieldClass,
        "mt-[9px] h-[41px] border-2 border-[color:#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      )}
    />

    <div className="mt-[18px] flex gap-[15px] pl-[23px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-[46px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

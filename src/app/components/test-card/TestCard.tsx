const TITLE_TEXT = "font-primary-bold text-[13.5px] leading-[16.34px]";
const LABEL_TEXT = "font-primary-bold text-[11.5px] leading-[13.92px]";

const GearGlyph = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a5adad]"
  >
    <circle cx="7" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.4v1.8M7 12.8v1.8M12.4 4.2l-1.6.9M3.2 10.9l-1.6.9M12.4 11.8l-1.6-.9M3.2 5.1l-1.6-.9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoGlyph = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a5adad]"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.7v4"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" />
  </svg>
);

const ChevronUpGlyph = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a5adad]"
  >
    <path
      d="M1 6.4 6 1.4l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-[62px]"
  >
    <div className="flex items-start justify-between">
      <span className={`${TITLE_TEXT} text-[#b5b5b5]`}>UI magician Agent</span>
      <GearGlyph />
    </div>

    <div className="mt-[21px] flex items-center gap-2">
      <ChevronUpGlyph width={8} height={5} />
      <span className={`${LABEL_TEXT} text-[#8b9291]`}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpGlyph width={12} height={8} />
      <span className={`${TITLE_TEXT} text-[#b2b2b1]`}>Add New Design</span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className={`${LABEL_TEXT} text-[#a4a4a3]`}>
          Personal Access Token
        </span>
        <InfoGlyph />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] ${LABEL_TEXT} text-[#737470] placeholder:text-[#737470]`}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-3">
        <span className={`${LABEL_TEXT} text-[#a3a3a2]`}>Design URL</span>
        <InfoGlyph />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[19px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className={`h-[37px] w-[85px] rounded bg-[#843a17] ${LABEL_TEXT} text-[#8c8078]`}
      >
        Awesome
      </button>
      <button
        type="button"
        className={`h-[37px] w-[85px] rounded bg-[#843a17] ${LABEL_TEXT} text-[#8c8078]`}
      >
        Prepare
      </button>
    </div>

    <h2 className={`mt-[46px] ${TITLE_TEXT} text-[#b0b0b0]`}>
      Recent Breakdowns
    </h2>
  </div>
);

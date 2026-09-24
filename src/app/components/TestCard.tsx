/**
 * TestCard — static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no interactivity. Values are taken from
 * the Figma export's style tokens and are intentionally approximate.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] min-h-[508px] bg-[#000000] px-5 pt-5 pb-6 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <img src="/images/test-card/gear.svg" width={14} height={16} alt="" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <img
        src="/images/test-card/chevron-sm.svg"
        width={8}
        height={5}
        alt=""
      />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[86px] flex items-center gap-2">
      <img
        src="/images/test-card/chevron-md.svg"
        width={12}
        height={8}
        alt=""
      />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <img
          src="/images/test-card/info-token.svg"
          width={15}
          height={15}
          alt=""
        />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <img
          src="/images/test-card/info-url.svg"
          width={15}
          height={15}
          alt=""
        />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[10px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex items-start gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;

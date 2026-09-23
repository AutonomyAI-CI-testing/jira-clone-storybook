/**
 * Static, self-contained rendering of the "UI magician Agent" panel from the
 * Figma frame. Presentational only — no props, no state, no behaviour.
 */
export const TestCard = () => (
  <div id="testElem" className="flex h-[508px] w-[254px] flex-col bg-black p-5">
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <img src="/images/test-card/gear.png" width={14} height={16} alt="" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <img
        src="/images/test-card/chevron-collapsed.png"
        width={8}
        height={5}
        alt=""
      />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <img
        src="/images/test-card/chevron-section.png"
        width={12}
        height={8}
        alt=""
      />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <label
        htmlFor="test-card-token"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <img
        src="/images/test-card/info-token.png"
        width={15}
        height={15}
        alt=""
      />
    </div>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-5 font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-3">
      <label
        htmlFor="test-card-url"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <img src="/images/test-card/info-url.png" width={15} height={15} alt="" />
    </div>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

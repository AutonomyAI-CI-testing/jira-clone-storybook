export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <img src="/images/test-card/gear.svg" alt="" width={14} height={16} />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <img
        src="/images/test-card/chevron-down.svg"
        alt=""
        width={8}
        height={5}
      />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[68px] flex items-center gap-2">
      <img src="/images/test-card/chevron-up.svg" alt="" width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <img
        src="/images/test-card/info-token.svg"
        alt=""
        width={15}
        height={15}
      />
    </div>
    <div className="mt-[10px] flex h-[37px] w-full items-center border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-[11px] flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <img src="/images/test-card/info-url.svg" alt="" width={15} height={15} />
    </div>
    <div className="mt-[10px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    <div className="mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

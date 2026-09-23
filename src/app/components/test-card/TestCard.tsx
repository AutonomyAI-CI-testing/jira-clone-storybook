export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#000000] px-5 pb-16 pt-5 font-primary">
    {/* Top bar */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <img
        src="/images/test-card/settings.svg"
        alt=""
        width={14}
        height={16}
        className="h-4 w-[14px]"
      />
    </div>

    {/* Collapsible row */}
    <div className="mt-4 flex items-center gap-2">
      <img
        src="/images/test-card/chevron-collapse.svg"
        alt=""
        width={8}
        height={5}
        className="h-[5px] w-2"
      />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <img
        src="/images/test-card/chevron-add.svg"
        alt=""
        width={12}
        height={8}
        className="h-2 w-3"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <img
        src="/images/test-card/info-token.svg"
        alt=""
        width={15}
        height={15}
        className="h-[15px] w-[15px]"
      />
    </div>
    <input
      readOnly
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />

    {/* Design URL */}
    <div className="mt-2.5 flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <img
        src="/images/test-card/info-url.svg"
        alt=""
        width={15}
        height={15}
        className="h-[15px] w-[15px]"
      />
    </div>
    <input
      readOnly
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
    />

    {/* Buttons */}
    <div className="mt-5 flex items-center justify-center gap-4">
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

    {/* Recent Breakdowns */}
    <h2 className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

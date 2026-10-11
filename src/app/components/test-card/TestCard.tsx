export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative flex h-[508px] w-[254px] flex-col overflow-hidden bg-black font-primary"
  >
    {/* Top strip */}
    <img
      src="/images/test-card/Background_5.svg"
      alt=""
      aria-hidden="true"
      className="block h-[9px] w-full"
    />

    {/* Header */}
    <div className="mt-[11px] flex items-center justify-between px-5">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <img
        src="/images/test-card/Image_3.svg"
        alt=""
        aria-hidden="true"
        className="h-4 w-[14px] shrink-0"
      />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
      <img
        src="/images/test-card/Image_2.svg"
        alt=""
        aria-hidden="true"
        className="h-[5px] w-2"
      />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
      <img
        src="/images/test-card/Image.svg"
        alt=""
        aria-hidden="true"
        className="h-2 w-3"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token label */}
    <div className="relative mt-[28px] flex h-[15px] items-center pl-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <img
        src="/images/test-card/Image_5.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[173px] top-0 h-[15px] w-[15px]"
      />
    </div>

    {/* Personal Access Token field */}
    <div className="ml-5 mt-[10px] flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[18px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL label */}
    <div className="relative mt-[11px] flex h-[15px] items-center pl-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <img
        src="/images/test-card/Image_4.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[100px] top-0 h-[15px] w-[15px]"
      />
    </div>

    {/* Design URL field */}
    <div className="ml-5 mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[18px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-[44px]">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
        Awesome
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
        Prepare
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] pl-5 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

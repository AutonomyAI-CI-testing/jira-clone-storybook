/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke-test artifact: it takes no props, holds no state and has no behaviour.
 * Colours, sizes and positions come from the frame's exported style guide; the
 * panel's own background is taken from the frame image.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1c1c1c] pl-[20px] pr-[23px] pt-[20px] font-['Inter',sans-serif]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <img
          src="/images/test-card/gear.svg"
          alt=""
          aria-hidden="true"
          width={14}
          height={16}
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <img
          src="/images/test-card/chevron-sm.svg"
          alt=""
          aria-hidden="true"
          width={8}
          height={5}
        />
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <img
          src="/images/test-card/chevron.svg"
          alt=""
          aria-hidden="true"
          width={12}
          height={8}
        />
        <h2 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <img
          src="/images/test-card/info.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={15}
        />
      </div>

      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <img
          src="/images/test-card/info-alt.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={15}
        />
      </div>

      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[20px]">
        <span className="text-[10.5px] leading-[12.71px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

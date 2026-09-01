// TestCard — self-contained, no props, matches Figma design "UI magician Agent"
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] flex flex-col py-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <img
          src="/images/testcard-gear.svg"
          alt="Settings"
          width={14}
          height={16}
        />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-6">
        <img
          src="/images/testcard-chevron-up2.svg"
          alt="Collapse"
          width={8}
          height={5}
        />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design header */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <img
          src="/images/testcard-chevron-up.svg"
          alt="Collapse section"
          width={12}
          height={8}
        />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
            Personal Access Token
          </span>
          <img
            src="/images/testcard-info2.svg"
            alt="Info"
            width={15}
            height={15}
          />
        </div>
        <div className="w-full h-[37px] flex items-center px-3 bg-[#272822] border border-[#a5adad]">
          <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
            Design URL
          </span>
          <img
            src="/images/testcard-info.svg"
            alt="Info"
            width={15}
            height={15}
          />
        </div>
        <div className="w-full h-[37px] flex items-center px-3 bg-[#272822] border-2 border-[#929291]">
          <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 mb-8">
        <button className="flex-1 h-[37px] bg-[#843a17] rounded flex items-center justify-center">
          <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
            Awesome
          </span>
        </button>
        <button className="flex-1 h-[37px] bg-[#843a17] rounded flex items-center justify-center">
          <span className="text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px]">
            Prepare
          </span>
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;

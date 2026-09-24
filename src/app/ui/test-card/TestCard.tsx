export default function TestCard() {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] overflow-hidden bg-black font-[Inter,sans-serif]"
    >
      {/* Header */}
      <span className="absolute left-[20px] top-[20px] text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="absolute left-[216px] top-[20px] text-[14px] leading-[16px] text-[#b5b5b5]">
        ⚙
      </span>

      {/* Collapsed description row */}
      <span className="absolute left-[23px] top-[57px] text-[8px] leading-none text-[#8b9291]">
        ⌃
      </span>
      <span className="absolute left-[40px] top-[54px] max-w-[190px] truncate text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>

      {/* Add New Design section */}
      <span className="absolute left-[26px] top-[150px] text-[12px] leading-none text-[#b2b2b1]">
        ⌃
      </span>
      <span className="absolute left-[43px] top-[145px] text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>

      {/* Personal Access Token field */}
      <span className="absolute left-[20px] top-[189px] text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <span className="absolute left-[173px] top-[187px] text-[15px] leading-[15px] text-[#a4a4a3]">
        ⓘ
      </span>
      <div className="absolute left-[20px] top-[215px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL field */}
      <span className="absolute left-[20px] top-[262px] text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <span className="absolute left-[100px] top-[260px] text-[15px] leading-[15px] text-[#a3a3a2]">
        ⓘ
      </span>
      <div className="absolute left-[20px] top-[287px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] font-semibold leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* Actions */}
      <div className="absolute left-[44px] top-[347px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </div>
      <div className="absolute left-[146px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </div>

      {/* Footer */}
      <span className="absolute left-[20px] top-[430px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}

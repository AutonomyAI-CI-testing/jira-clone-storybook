import {
  FiChevronDown,
  FiChevronUp,
  FiInfo,
  FiSettings,
} from "react-icons/fi";

/**
 * Standalone smoke-test card that redraws the attached Figma frame: a dark
 * "UI magician Agent" settings panel. Deliberately self-contained — no props,
 * no state, no interactivity. Values are taken from the design's extracted
 * style guide and use literal colours rather than the app's design tokens,
 * since this panel sits outside the app's blue-on-white language.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] overflow-hidden bg-[#1e1e1e] font-['Inter',sans-serif] font-semibold"
    >
      {/* Title row */}
      <span className="absolute left-[20px] top-[20px] text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        size={14}
        className="absolute left-[216px] top-[20px] text-[#b5b5b5]"
      />

      {/* Collapsed info row */}
      <FiChevronDown
        size={10}
        className="absolute left-[23px] top-[57px] text-[#8b9291]"
      />
      <span className="absolute left-[40px] top-[54px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>

      {/* Add New Design */}
      <FiChevronUp
        size={12}
        className="absolute left-[26px] top-[150px] text-[#b2b2b1]"
      />
      <span className="absolute left-[43px] top-[145px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>

      {/* Personal Access Token */}
      <span className="absolute left-[20px] top-[189px] text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo
        size={15}
        className="absolute left-[173px] top-[187px] text-[#a4a4a3]"
      />
      <div className="absolute left-[20px] top-[215px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <span className="absolute left-[20px] top-[262px] text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo
        size={15}
        className="absolute left-[100px] top-[260px] text-[#a3a3a2]"
      />
      <div className="absolute left-[20px] top-[287px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[20px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/
      </div>

      {/* Actions */}
      <button
        type="button"
        className="absolute left-[44px] top-[347px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="absolute left-[146px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>

      {/* Recent Breakdowns */}
      <span className="absolute left-[20px] top-[430px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;

import {
  HiOutlineChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

// Smoke-test reproduction of a Figma frame (node 2-2, "Test Page - Simple"): a
// dark settings panel. The frame's palette has no equivalent in the app's
// semantic tokens, so the panel's own colours are written as literals here on
// purpose. Nothing renders this component from the app — it exists only as a
// Storybook story.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog6Tooth aria-hidden size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiOutlineChevronUp aria-hidden size={12} className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <HiOutlineChevronUp aria-hidden size={14} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <label
        htmlFor="test-card-token"
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={15}
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:font-primary-light placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-3">
      <label
        htmlFor="test-card-url"
        className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={15}
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#b5b5b5] placeholder:font-primary-light placeholder:text-[#71726e]"
    />

    <div className="mt-[21px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9c4620] active:bg-[#6b2f13]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9c4620] active:bg-[#6b2f13]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

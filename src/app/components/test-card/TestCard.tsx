import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static recreation of the "UI magician Agent" panel from the Figma frame.
 *
 * Smoke-test fixture: takes no props, holds no state and wires nothing up.
 * Colours and spacing are read off the design image and are deliberately
 * approximate.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1a1a1a] px-10 py-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[24px] leading-none">UI magician Agent</h1>
      <IoSettingsOutline size={28} className="shrink-0" />
    </div>

    <div className="mt-11 flex items-center gap-3">
      <IoChevronUp size={20} className="shrink-0" />
      <span className="truncate text-[16px] text-[#c8c8c8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-40" />

    <div className="flex items-center gap-3">
      <IoChevronUp size={26} className="shrink-0" />
      <h2 className="text-[24px] leading-none">Add New Design</h2>
    </div>

    <div className="mt-16 flex items-center justify-between">
      <label htmlFor="test-card-access-token" className="text-[16px]">
        Personal Access Token
      </label>
      <IoInformationCircleOutline size={24} className="shrink-0" />
    </div>
    <input
      id="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-6 h-16 w-full rounded-lg border border-[#8a8a8a] bg-[#2c2c2c] px-3 text-[18px] text-[#d4d4d4] placeholder:text-[#8a8a8a]"
    />

    <div className="mt-10 flex items-center justify-between">
      <label htmlFor="test-card-design-url" className="text-[16px]">
        Design URL
      </label>
      <IoInformationCircleOutline size={24} className="shrink-0" />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file:"
      className="mt-6 h-16 w-full rounded-lg border border-[#8a8a8a] bg-[#2c2c2c] px-3 text-[18px] text-[#d4d4d4] placeholder:text-[#8a8a8a]"
    />

    <div className="mt-12 flex gap-[37px] pl-[50px]">
      <button
        type="button"
        className="h-[62px] w-[168px] rounded-lg bg-[#8a3a12] text-[18px] text-[#d9d9d9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] w-[170px] rounded-lg bg-[#8a3a12] text-[18px] text-[#d9d9d9]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 text-[22px] leading-none">Recent Breakdowns</h2>
  </div>
);

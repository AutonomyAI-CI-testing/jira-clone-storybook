import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test fixture: a static reproduction of the "UI magician Agent" Figma
 * frame (token + design-URL form).
 *
 * Self-contained and prop-less — no state, no data, no interactivity. It
 * deliberately uses literal colours instead of the app's semantic tokens, so
 * it is not part of the product UI.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1b1b1b] px-10 py-11 font-primary text-[#d6d6d6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[20px]">UI magician Agent</span>
      <IoSettingsOutline size={26} className="text-[#c9c9c9]" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#c2c2c2]">
      <IoChevronUp size={20} />
      <span className="text-[16px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[110px] flex items-center gap-3">
      <IoChevronUp size={24} />
      <span className="font-primary-bold text-[22px]">Add New Design</span>
    </div>

    <div className="mt-10">
      <div className="mb-3 flex items-center gap-3 text-[17px]">
        Personal Access Token
        <IoInformationCircleOutline size={22} className="text-[#c9c9c9]" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="h-[64px] w-full rounded-[4px] border border-[#8a8a8a] bg-[#2b2b2b] px-6 text-[17px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-6">
      <div className="mb-3 flex items-center gap-3 text-[17px]">
        Design URL
        <IoInformationCircleOutline size={22} className="text-[#c9c9c9]" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="h-[64px] w-full rounded-[4px] border border-[#8a8a8a] bg-[#2b2b2b] px-6 text-[17px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-12 flex justify-center gap-8">
      <button
        type="button"
        className="h-[64px] w-[168px] rounded-[6px] bg-[#9c4a1b] text-[18px] text-[#c2c2c2]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[64px] w-[168px] rounded-[6px] bg-[#9c4a1b] text-[18px] text-[#c2c2c2]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[76px] font-primary-bold text-[22px]">
      Recent Breakdowns
    </span>
  </div>
);

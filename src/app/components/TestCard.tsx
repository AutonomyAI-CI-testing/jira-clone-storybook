import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test reproduction of the "UI magician Agent" panel.
 *
 * Self-contained by design: no props, no state, inert controls. The card is a
 * fixed 254x508 canvas and every child is absolutely positioned at the
 * coordinates taken from the frame's style guide, so nothing is guessed.
 *
 * NOTE: the literal hex colours here are a deliberate exception to the house
 * "consume semantic tokens, never raw values" rule — this is a throwaway
 * design-to-code smoke test, not a design-system component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative h-[508px] w-[254px] overflow-hidden bg-[#000000] [font-family:Inter,sans-serif]"
  >
    <p className="absolute left-[20px] top-[20px] text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
      UI magician Agent
    </p>
    <FiSettings
      aria-hidden
      className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#b5b5b5]"
    />

    <FiChevronUp
      aria-hidden
      className="absolute left-[23px] top-[57px] h-[5px] w-[8px] text-[#8b9291]"
    />
    <p className="absolute left-[40px] top-[54px] text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
      From entire frame to a singl...
    </p>

    <FiChevronUp
      aria-hidden
      className="absolute left-[26px] top-[150px] h-[8px] w-[12px] text-[#b2b2b1]"
    />
    <p className="absolute left-[43px] top-[145px] text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
      Add New Design
    </p>

    <label
      htmlFor="testElem-token"
      className="absolute left-[20px] top-[189px] text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]"
    >
      Personal Access Token
    </label>
    <FiInfo
      aria-hidden
      className="absolute left-[173px] top-[187px] size-[15px] text-[#a4a4a3]"
    />
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="absolute left-[20px] top-[215px] h-[36px] w-[211px] rounded-none border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <label
      htmlFor="testElem-design-url"
      className="absolute left-[20px] top-[262px] text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]"
    >
      Design URL
    </label>
    <FiInfo
      aria-hidden
      className="absolute left-[100px] top-[260px] size-[15px] text-[#a3a3a2]"
    />
    <input
      id="testElem-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="absolute left-[20px] top-[287px] h-[37px] w-[211px] rounded-none border-2 border-[#929291] bg-[#272822] pl-[20px] text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <button
      type="button"
      className="absolute left-[44px] top-[347px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[14px] text-[#8c8078]"
    >
      Awesome
    </button>
    <button
      type="button"
      className="absolute left-[146px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[14px] text-[#8c8078]"
    >
      Prepare
    </button>

    <p className="absolute left-[20px] top-[430px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

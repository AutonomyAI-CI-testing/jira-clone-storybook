import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]";

/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained and propless — nothing in the app imports it.
 *
 * The frame's palette has no counterpart in this repo's token set (the nearest
 * declared token sits 0.014-0.085 away in perceptual distance), so the colours
 * below are the frame's own values as arbitrary Tailwind values rather than
 * semantic role classes. The type sizes snap to the repo's `text-xs` (13px) and
 * `text-2xs` (12px) scale, and the families are the repo's own rather than the
 * frame's Inter, which the design system does not carry.
 *
 * The two buttons are plain markup on purpose: no `Button` variant produces the
 * frame's rust fill, and overriding it with a className would fight the
 * component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdOutlineSettings
        aria-hidden="true"
        className="text-[#d5d5d5]"
        size={16}
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowDropUpLine
        aria-hidden="true"
        className="text-[#8b9291]"
        size={18}
      />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-[74px] flex items-center gap-2">
      <RiArrowDropUpLine
        aria-hidden="true"
        className="text-[#b2b2b1]"
        size={20}
      />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-6 flex items-center gap-4">
      <label htmlFor="test-card-token" className="text-2xs text-[#a4a4a3]">
        Personal Access Token
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="text-[#c8c8c8]"
        size={16}
      />
    </div>
    <input
      id="test-card-token"
      name="token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[10px] h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] text-2xs text-[#c5c5c5] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-4">
      <label htmlFor="test-card-url" className="text-2xs text-[#a3a3a2]">
        Design URL
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="text-[#c8c8c8]"
        size={16}
      />
    </div>
    <input
      id="test-card-url"
      name="design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[10px] h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#c5c5c5] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <span className="mt-[46px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

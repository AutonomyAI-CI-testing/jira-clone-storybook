import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Reproduction of the "Add New Design" panel from the Test Page Figma frame.
 * Smoke test: self-contained, takes no props, holds no state.
 *
 * The frame's palette (near-black panel, rust buttons) has no counterpart in
 * this repo's semantic tokens, so the few colours are Tailwind arbitrary values
 * rather than a token that does not match.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1b1b1b] px-8 py-8 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <HiOutlineCog aria-hidden className="h-6 w-6 text-[#c8c8c8]" />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[15px] text-[#a8a8a8]">
      <HiChevronUp aria-hidden className="h-4 w-4 shrink-0" />
      <span className="min-w-0 truncate">
        From entire frame to a single element
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp aria-hidden className="h-5 w-5 shrink-0 text-[#e6e6e6]" />
      <h2 className="font-primary-black text-xl text-[#e6e6e6]">
        Add New Design
      </h2>
    </div>

    <label
      htmlFor="testcard-access-token"
      className="mt-9 flex items-center gap-2 text-[15px] text-[#d4d4d4]"
    >
      Personal Access Token
      <HiOutlineInformationCircle aria-hidden className="h-[22px] w-[22px]" />
    </label>
    <input
      id="testcard-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-2 h-14 w-full rounded border border-[#7a7a7a] bg-[#2a2a2a] px-3 text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
    />

    <label
      htmlFor="testcard-design-url"
      className="mt-4 flex items-center gap-2 text-[15px] text-[#d4d4d4]"
    >
      Design URL
      <HiOutlineInformationCircle aria-hidden className="h-[22px] w-[22px]" />
    </label>
    <input
      id="testcard-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-2 h-14 w-full rounded border border-[#7a7a7a] bg-[#2a2a2a] px-3 text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
    />

    <div className="mt-8 flex gap-7">
      <button
        type="button"
        className="h-[62px] flex-1 rounded-lg bg-[#9c3d1c] text-[17px] text-[#e2cec7]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] flex-1 rounded-lg bg-[#9c3d1c] text-[17px] text-[#e2cec7]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-black text-xl text-[#e6e6e6]">
      Recent Breakdowns
    </h2>
  </div>
);

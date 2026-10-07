import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Smoke-test component: reproduces the dark "UI magician Agent" panel from the
 * attached Figma frame. Self-contained — no props, no state, no repo imports
 * beyond icons.
 *
 * Deliberately NOT built on the repo's semantic design tokens: it reproduces an
 * external dark palette with arbitrary values. This is throwaway smoke-test UI,
 * not a convention to follow.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#000000] px-10 py-10 font-primary text-[#b5b5b5]"
    >
      <div className="mx-auto flex w-full max-w-[508px] flex-col">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h1 className="font-primary-bold text-[28px] leading-none text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <MdSettings aria-hidden className="h-7 w-7 text-[#b5b5b5]" />
        </div>

        {/* Disclosure row */}
        <div className="mt-10 flex items-center gap-3 rounded-[2px] bg-[#0b0b0b] px-3 py-3">
          <MdKeyboardArrowUp
            aria-hidden
            className="h-6 w-6 shrink-0 text-[#8b9291]"
          />
          <span className="truncate text-[22px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design */}
        <div className="mt-40 flex items-center gap-2">
          <MdKeyboardArrowUp aria-hidden className="h-7 w-7 text-[#b2b2b1]" />
          <h2 className="font-primary-bold text-[26px] leading-none text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="mt-10 flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="font-primary-bold text-[22px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <MdInfoOutline aria-hidden className="h-5 w-5 text-[#a4a4a3]" />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-4 py-3 text-[22px] text-[#b5b5b5] placeholder:text-[#737470]"
        />

        {/* Design URL */}
        <div className="mt-8 flex items-center gap-2">
          <label
            htmlFor="testElem-url"
            className="font-primary-bold text-[22px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <MdInfoOutline aria-hidden className="h-5 w-5 text-[#a3a3a2]" />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-4 py-3 text-[22px] text-[#b5b5b5] placeholder:text-[#71726e]"
        />

        {/* Actions */}
        <div className="mt-10 flex gap-9 px-12">
          <button
            type="button"
            className="flex-1 rounded-[4px] bg-[#843a17] px-6 py-4 text-[22px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-[4px] bg-[#843a17] px-6 py-4 text-[22px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="mt-28 font-primary-bold text-[26px] leading-none text-[#b2b2b1]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

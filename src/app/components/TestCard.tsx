import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

/**
 * Static reproduction of the cropped "UI magician Agent" Figma panel.
 * Smoke test: no props, no state, nothing wired up. The frame's own colours have
 * no semantic role here and must not shift with the app theme, so they are named
 * as Tailwind arbitrary values rather than token classes.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-4">
          UI magician Agent
        </h2>
        <MdOutlineSettings
          size={16}
          className="shrink-0 text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[70px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <h3 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <label
        htmlFor="testcard-personal-access-token"
        className="mt-[30px] flex items-center gap-2 font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
        <MdInfoOutline size={15} className="shrink-0" aria-hidden="true" />
      </label>
      <input
        id="testcard-personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <label
        htmlFor="testcard-design-url"
        className="mt-[11px] flex items-center gap-2 font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
        <MdInfoOutline size={15} className="shrink-0" aria-hidden="true" />
      </label>
      <input
        id="testcard-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="ml-6 mt-[22px] flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[46px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

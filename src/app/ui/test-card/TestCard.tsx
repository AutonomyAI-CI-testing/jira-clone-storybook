import {
  MdInfoOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSettings,
} from "react-icons/md";

/**
 * Smoke-test panel reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no handlers — every piece of
 * copy below is static content baked in. The panel's palette is written as
 * literal values because it comes from an external design and must look the
 * same in every theme, rather than shifting with the semantic tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 py-5 font-primary text-[#b5b5b5]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px]">
          UI magician Agent
        </span>
        <MdSettings size={20} className="shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-5 flex items-center gap-2">
        <MdKeyboardArrowUp size={18} className="shrink-0 text-[#8b9291]" />
        <span className="truncate font-primary-bold text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-12 flex items-center gap-2">
        <MdKeyboardArrowDown size={18} className="shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <MdInfoOutline size={14} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="font-primary-bold text-[11.5px] text-[#a3a3a2]">
            Design URL
          </span>
          <MdInfoOutline size={14} className="shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="w-[84px] rounded-[4px] bg-[#843a17] py-4 font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[84px] rounded-[4px] bg-[#843a17] py-4 font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <p className="mt-14 font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};

import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" Figma frame, used to smoke
 * test the design-to-preview pipeline. Self-contained: no props, no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1c1d17] px-5 py-5 font-primary"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FaCog aria-hidden size={15} className="text-[#b5b5b5]" />
    </header>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp aria-hidden size={8} className="text-[#8b9291]" />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-[75px]">
      <div className="flex items-center gap-2">
        <FaChevronUp aria-hidden size={12} className="text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[26px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="personal-access-token"
            className="text-2xs text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <FaInfoCircle aria-hidden size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          id="personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[13px] h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-2xs text-[#a4a4a3] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[9px]">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-2xs text-[#a3a3a2]">
            Design URL
          </label>
          <FaInfoCircle aria-hidden size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          className="mt-[12px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#a3a3a2] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex gap-4 pl-6">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

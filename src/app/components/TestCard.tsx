import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel
 * from a Figma frame. Self-contained — no props, no state, no logic.
 *
 * The design's palette (near-black panel, rust buttons) has no semantic role in
 * this app's token set, so the colours are written as literal values rather than
 * editing the theme in app.css.
 */
export const TestCard = () => {
  const buttonClass =
    "h-[72px] w-[170px] cursor-pointer rounded-[8px] bg-[#9c4a1c] text-[18px] text-[#c9bfb8]";

  const inputClass =
    "mt-[29px] h-[58px] w-full rounded border border-[#9c9c9c] bg-[#242424] px-[38px] text-[18px] text-[#e9e9e9] placeholder:text-[#8a8a8a]";

  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-[38px] pt-[42px] pb-[48px] font-primary text-[#e9e9e9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-primary-bold leading-none">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-[#c9c9c9]"
        >
          <MdSettings size={26} aria-hidden />
        </button>
      </div>

      <div className="mt-[37px] flex items-center gap-[14px]">
        <MdExpandLess
          size={26}
          className="shrink-0 text-[#b0b0b0]"
          aria-hidden
        />
        <span className="text-[18px] text-[#b0b0b0]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[157px] flex items-center gap-[14px]">
        <MdExpandLess
          size={30}
          className="shrink-0 text-[#d5d5d5]"
          aria-hidden
        />
        <h2 className="text-[26px] font-primary-bold text-[#d5d5d5]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[60px]">
        <div className="flex items-center justify-between">
          <label htmlFor="test-card-token" className="text-[18px] text-[#c0c0c0]">
            Personal Access Token
          </label>
          <MdInfoOutline size={24} className="text-[#cfcfcf]" aria-hidden />
        </div>
        <input
          id="test-card-token"
          className={inputClass}
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-[40px]">
        <div className="flex items-center gap-[14px]">
          <label
            htmlFor="test-card-design-url"
            className="text-[18px] text-[#c0c0c0]"
          >
            Design URL
          </label>
          <MdInfoOutline size={24} className="text-[#cfcfcf]" aria-hidden />
        </div>
        <input
          id="test-card-design-url"
          className={inputClass}
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-[47px] flex gap-[34px] pl-[50px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[79px] text-[26px] font-primary-bold text-[#d5d5d5]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

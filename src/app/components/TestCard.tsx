import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Standalone smoke-test card reproducing the "UI magician Agent" Figma frame.
 * Self-contained: takes no props and holds no state.
 *
 * Styling note: this card is deliberately off the app's token system — the
 * frame's dark palette is carried by Tailwind arbitrary values, because
 * `tailwind.config.js` replaces `theme.colors` wholesale and the stock colour
 * utilities therefore compile to nothing.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-7 pt-7 pb-10 font-primary-light text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[19px] leading-none">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#9a9a9a] hover:text-[#e6e6e6]"
      >
        <MdSettings size={22} />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-2">
      <MdKeyboardArrowUp size={20} className="shrink-0 text-[#9a9a9a]" />
      <p className="text-[15px] text-[#9a9a9a]">
        From entire frame to a singl…
      </p>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <MdKeyboardArrowUp size={26} className="shrink-0" />
      <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-token" className="text-[15px] text-[#c9c9c9]">
          Personal Access Token
        </label>
        <MdInfoOutline size={18} className="shrink-0 text-[#c9c9c9]" />
      </div>
      <input
        id="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded-[4px] border border-[#8a8a8a] bg-transparent px-4 py-[18px] text-[15px] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-url" className="text-[15px] text-[#c9c9c9]">
          Design URL
        </label>
        <MdInfoOutline size={18} className="shrink-0 text-[#c9c9c9]" />
      </div>
      <input
        id="testElem-url"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded-[4px] border border-[#8a8a8a] bg-transparent px-4 py-[18px] text-[15px] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-7 flex gap-9">
      <button
        type="button"
        className="w-[170px] rounded-[6px] bg-[#9c3f12] py-[18px] text-[16px] text-[#b3aaa4]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-[6px] bg-[#9c3f12] py-[18px] text-[16px] text-[#b3aaa4]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[18px]">Recent Breakdowns</h2>
  </div>
);

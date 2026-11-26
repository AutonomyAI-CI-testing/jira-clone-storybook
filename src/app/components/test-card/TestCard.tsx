import { MdSettings } from "react-icons/md";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

/**
 * Smoke-test card built from a Figma frame. Presentational only: no props, no
 * state and no handlers, so the inputs and buttons do nothing.
 *
 * Colours and sizes are self-contained literals rather than the app's semantic
 * tokens, because the frame is a dark panel and this component is never wired
 * into a screen or a theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1a1a1a] px-10 pt-12 pb-10 font-primary text-[#b8b8b8]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[26px] text-[#e6e6e6]">UI magician Agent</span>
        <MdSettings className="shrink-0 text-[#c9c9c9]" size={26} />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <HiChevronUp className="shrink-0 text-[#b3b3b3]" size={22} />
        <span className="truncate text-[20px] text-[#b3b3b3]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <HiChevronUp className="shrink-0 text-[#dcdcdc]" size={24} />
        <span className="text-[24px] text-[#dcdcdc]">Add New Design</span>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-8">
          <label htmlFor="testcard-token" className="text-[18px]">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            className="shrink-0 text-[#c0c0c0]"
            size={22}
            aria-hidden
          />
        </div>
        <input
          id="testcard-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-4 h-[56px] w-full border border-[#9a9a9a] bg-[#262626] px-6 font-mono text-[17px] text-[#e6e6e6] outline-none placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-8">
          <label htmlFor="testcard-url" className="text-[18px]">
            Design URL
          </label>
          <HiOutlineInformationCircle
            className="shrink-0 text-[#c0c0c0]"
            size={22}
            aria-hidden
          />
        </div>
        <input
          id="testcard-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-4 h-[56px] w-full border border-[#9a9a9a] bg-[#262626] px-6 font-mono text-[17px] text-[#e6e6e6] outline-none placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-11 flex gap-9">
        <button
          type="button"
          className="h-[56px] w-[170px] rounded-lg bg-[#a83e12] text-[18px] text-[#c98a68]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[56px] w-[170px] rounded-lg bg-[#a83e12] text-[18px] text-[#c98a68]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-32 text-[24px] text-[#d0d0d0]">Recent Breakdowns</h2>
    </div>
  );
};

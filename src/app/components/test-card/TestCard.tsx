import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Smoke-test component built from a Figma frame.
 *
 * Standalone by design: takes no props, all content is literal, and it does not
 * use the design-system tokens (the frame's palette is off-system). Colours,
 * type and spacing are eyeballed approximations of the frame — pixel fidelity is
 * explicitly out of scope here.
 *
 * Note: `tailwind.config.js` replaces `theme.colors` and `theme.fontFamily`
 * rather than extending them, so default utilities such as `bg-gray-800` or
 * `font-mono` do not exist in this repo — arbitrary values are used instead.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#17130f] px-6 py-8 font-primary text-[#e6e6e6]"
  >
    {/* Header row: title + settings gear */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl leading-6">UI magician Agent</h1>
      <MdSettings
        size={26}
        aria-hidden
        className="mt-0.5 shrink-0 text-[#e6e6e6]"
      />
    </div>

    {/* Collapsed row: chevron + truncated label */}
    <div className="mt-4 flex items-center gap-2">
      <MdKeyboardArrowUp
        size={22}
        aria-hidden
        className="shrink-0 text-[#e6e6e6]"
      />
      <span className="truncate text-sm text-[#9aa0a6]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Large vertical gap before the form section */}
    <div className="h-40" aria-hidden />

    {/* Section header: chevron + "Add New Design" */}
    <div className="flex items-center gap-2">
      <MdKeyboardArrowUp size={24} aria-hidden className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-pat"
          className="font-primary-bold text-base text-[#c7c7c7]"
        >
          Personal Access Token
        </label>
        <MdInfoOutline
          size={20}
          aria-hidden
          className="shrink-0 text-[#c7c7c7]"
        />
      </div>
      <input
        id="testElem-pat"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 h-11 w-full rounded border border-[#5a5248] bg-[#2a2a20] px-3 text-sm text-[#e6e6e6] placeholder:text-[#9aa0a6]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-url"
          className="font-primary-bold text-base text-[#c7c7c7]"
        >
          Design URL
        </label>
        <MdInfoOutline
          size={20}
          aria-hidden
          className="shrink-0 text-[#c7c7c7]"
        />
      </div>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-2 h-11 w-full rounded border border-[#5a5248] bg-[#2a2a20] px-3 text-sm text-[#e6e6e6] placeholder:text-[#9aa0a6]"
      />
    </div>

    {/* Actions */}
    <div className="mt-6 grid grid-cols-2 gap-4">
      <button
        type="button"
        className="h-11 rounded-md bg-[#b04a1e] font-primary-bold text-[#f0cbb8]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-11 rounded-md bg-[#b04a1e] font-primary-bold text-[#f0cbb8]"
      >
        Prepare
      </button>
    </div>

    {/* Trailing section header (empty in the frame) */}
    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

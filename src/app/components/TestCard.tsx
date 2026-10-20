import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: it takes no props and holds no state, so every value
 * (copy, sizes, colours) comes straight from the design.
 *
 * The frame is a fixed dark panel from another tool, so its colours are written
 * as literals rather than as this app's semantic theme tokens — the card is
 * meant to look the same in every theme.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] p-5 text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <FiSettings size={16} aria-hidden />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#8b9291]" aria-hidden />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
        <FiChevronUp size={14} aria-hidden />
        <span>Add New Design</span>
      </div>

      <label
        htmlFor="personal-access-token"
        className="mt-7 flex items-center gap-2 text-[11.5px] text-[#a4a4a3]"
      >
        Personal Access Token
        <FiInfo size={15} aria-hidden />
      </label>
      <input
        id="personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] outline-none placeholder:text-[#737470]"
      />

      <label
        htmlFor="design-url"
        className="mt-3 flex items-center gap-2 text-[11.5px] text-[#a3a3a2]"
      >
        Design URL
        <FiInfo size={15} aria-hidden />
      </label>
      <input
        id="design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-5 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};

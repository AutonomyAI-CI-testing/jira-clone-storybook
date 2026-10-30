import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" settings panel from Figma.
 * Self-contained: no props, no state, no data.
 *
 * Colours are explicit values rather than the app's semantic tokens on purpose:
 * the frame's palette is a neutral grey-black that the theme tokens do not
 * carry, and the panel has to render the same in every preview theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[22px] text-[#d4d4d4]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded-full p-1 text-[#cfcfcf] hover:bg-[#2a2a2a]"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp size={16} className="shrink-0" />
      <span className="truncate text-[18px] text-[#9a9a9a]">
        From entire frame to a single React component file
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <FiChevronUp size={18} className="shrink-0" />
      <h3 className="font-primary-bold text-[20px] text-[#d4d4d4]">
        Add New Design
      </h3>
    </div>

    <div className="mt-12 flex items-center gap-3">
      <span className="text-[17px] text-[#c4c4c4]">Personal Access Token</span>
      <FiInfo size={16} className="shrink-0 text-[#c4c4c4]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-4 h-[70px] w-full border border-[#b0b0b0] bg-[#262626] px-8 text-[17px] text-[#c9c9c9] placeholder:text-[#8c8c8c]"
    />

    <div className="mt-10 flex items-center gap-3">
      <span className="text-[17px] text-[#c4c4c4]">Design URL</span>
      <FiInfo size={16} className="shrink-0 text-[#c4c4c4]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-4 h-[70px] w-full border border-[#6e6e6e] bg-[#262626] px-8 text-[17px] text-[#c9c9c9] placeholder:text-[#8c8c8c]"
    />

    <div className="mt-12 flex gap-[34px]">
      <button
        type="button"
        className="h-[72px] w-[170px] rounded-md bg-[#a8410f] text-[19px] text-[#b8b8b8]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[72px] w-[170px] rounded-md bg-[#a8410f] text-[19px] text-[#b8b8b8]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[52px] font-primary-bold text-[20px] text-[#d4d4d4]">
      Recent Breakdowns
    </h3>
  </div>
);

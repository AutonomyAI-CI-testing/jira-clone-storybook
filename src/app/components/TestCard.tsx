import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static mock of the "UI magician Agent" panel from a Figma frame.
 *
 * Smoke test only: self-contained, no props, no state and no handlers.
 * Spacing, colours and type are approximations taken from the frame image.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col gap-6 bg-[#0d0d0d] p-6 font-primary-light text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-white">
        UI magician Agent
      </h1>
      <FiSettings size={22} aria-hidden="true" />
    </div>

    <div className="flex items-center gap-2 text-sm text-[#8a8a8a]">
      <FiChevronUp size={18} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="flex items-center gap-2 font-primary-black text-lg text-[#d4d4d4]">
      <FiChevronUp size={20} aria-hidden="true" />
      Add New Design
    </h2>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm text-[#c0c0c0]">
        <label htmlFor="testcard-access-token">Personal Access Token</label>
        <FiInfo size={15} aria-hidden="true" className="text-[#9a9a9a]" />
      </div>
      <input
        id="testcard-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded-sm border border-[#6b6b6b] bg-[#161616] px-3 py-3 text-sm text-[#e6e6e6] placeholder:text-[#6f6f6f]"
      />
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm text-[#c0c0c0]">
        <label htmlFor="testcard-design-url">Design URL</label>
        <FiInfo size={15} aria-hidden="true" className="text-[#9a9a9a]" />
      </div>
      <input
        id="testcard-design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="w-full rounded-sm border border-[#6b6b6b] bg-[#161616] px-3 py-3 text-sm text-[#e6e6e6] placeholder:text-[#6f6f6f]"
      />
    </div>

    <div className="flex gap-4">
      <button
        type="button"
        className="rounded-sm border border-[#c2622f] bg-[#a5461f] px-8 py-3 font-primary-bold text-sm text-[#e8c4b0]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-sm border border-[#c2622f] bg-[#a5461f] px-8 py-3 font-primary-bold text-sm text-[#e8c4b0]"
      >
        Prepare
      </button>
    </div>

    <h2 className="font-primary-black text-lg text-[#d4d4d4]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

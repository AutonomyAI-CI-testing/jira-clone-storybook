import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test: self-contained, no props, no state. Colours and spacing are
 * approximated from the design image with arbitrary Tailwind values rather than
 * the semantic token layer, because the frame is a fixed near-black plugin
 * canvas that does not follow the app's theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#161616] px-10 py-10 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] text-[#e0e0e0]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-[#e0e0e0]"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <FiChevronUp size={18} aria-hidden className="shrink-0 text-[#8a8a8a]" />
      <span className="w-[360px] truncate text-[16px] text-[#8a8a8a]">
        From entire frame to a single component
      </span>
    </div>

    <div aria-hidden className="h-[150px]" />

    <div className="flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden className="text-[#e0e0e0]" />
      <h2 className="font-primary-bold text-[20px] text-[#e0e0e0]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-[16px] text-[#c9c9c9]">
          Personal Access Token
        </label>
        <FiInfo size={20} aria-hidden className="text-[#c9c9c9]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[56px] w-full rounded-[4px] border border-[#5a5a5a] bg-[#232323] px-7 text-[16px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-[16px] text-[#c9c9c9]">
          Design URL
        </label>
        <FiInfo size={20} aria-hidden className="text-[#c9c9c9]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[56px] w-full rounded-[4px] border border-[#8a8a8a] bg-[#232323] px-7 text-[16px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-14 flex gap-8">
      <button
        type="button"
        className="h-[52px] w-[172px] rounded-[4px] bg-[#a04a22] font-primary-bold text-[17px] text-[#8f8f8f]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[52px] w-[172px] rounded-[4px] bg-[#a04a22] font-primary-bold text-[17px] text-[#8f8f8f]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[20px] text-[#e0e0e0]">
      Recent Breakdowns
    </h2>
  </div>
);

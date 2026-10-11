import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Standalone card reproducing the "UI magician Agent" panel.
 * Self-contained by design: no props, no state, nothing imports it.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-black p-5 font-primary-bold text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xs">UI magician Agent</h1>
      <FiSettings aria-hidden className="text-icon" size={16} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-icon-subtle" size={8} />
      <span className="truncate text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <FiChevronUp
        aria-hidden
        className="shrink-0 text-icon-subtle"
        size={12}
      />
      <h2 className="text-xs">Add New Design</h2>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-2xs text-font-subtle">
          Personal Access Token
        </label>
        <FiInfo aria-hidden className="text-icon-subtle" size={15} />
      </div>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full border border-border-bold bg-background-input px-2 py-2 text-2xs placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-design-url"
          className="text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <FiInfo aria-hidden className="text-icon-subtle" size={15} />
      </div>
      <input
        id="test-card-design-url"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full border-2 border-[#929291] bg-background-input px-2 py-2 text-2xs placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2 text-2xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2 text-2xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-xs">Recent Breakdowns</h2>
  </div>
);

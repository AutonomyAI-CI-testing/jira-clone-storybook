import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the Test Page
 * Figma frame. Deliberately self-contained: no props, no state and no data,
 * so it renders as-is wherever it is placed.
 *
 * The colours are literal values read off the frame: its near-black panel and
 * brick-orange buttons have no matching role in the app's theme tokens, and
 * the component is not meant to follow a theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-8 py-6 font-primary text-[#c8c8c8]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <span aria-hidden="true">
        <FiSettings size={24} />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2 text-lg text-[#9a9a9a]">
      <span aria-hidden="true">
        <FiChevronUp size={20} />
      </span>
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <section className="mt-24">
      <h3 className="flex items-center gap-2 font-primary-bold text-2xl">
        <span aria-hidden="true">
          <FiChevronUp size={20} />
        </span>
        Add New Design
      </h3>

      <div className="mt-16">
        <div className="flex items-center gap-8">
          <label htmlFor="testCardAccessToken" className="text-xl">
            Personal Access Token
          </label>
          <span aria-hidden="true">
            <FiInfo size={24} />
          </span>
        </div>
        <input
          id="testCardAccessToken"
          type="text"
          className="mt-4 w-full rounded-sm border border-[#8a8a8a] bg-[#2b2b2b] px-4 py-5 text-xl text-[#c8c8c8] placeholder:text-[#8a8a8a]"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-8">
          <label htmlFor="testCardDesignUrl" className="text-xl">
            Design URL
          </label>
          <span aria-hidden="true">
            <FiInfo size={24} />
          </span>
        </div>
        <input
          id="testCardDesignUrl"
          type="text"
          className="mt-4 w-full rounded-sm border border-[#8a8a8a] bg-[#2b2b2b] px-4 py-5 text-xl text-[#c8c8c8] placeholder:text-[#8a8a8a]"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-20 flex gap-10">
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#a04a1c] py-4 text-xl text-[#b5b5b5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#a04a1c] py-4 text-xl text-[#b5b5b5]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

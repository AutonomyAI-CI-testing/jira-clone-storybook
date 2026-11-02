import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_INPUT =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-5 text-base text-font placeholder:text-font-subtlest";

const RUST_BUTTON =
  "w-[170px] rounded-md bg-[#96421b] py-5 font-primary text-lg text-[#d8c3b6]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded-full p-1 text-font-subtlest hover:bg-background-neutral"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <FiChevronUp size={20} className="text-font" />
      <span className="text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={20} className="text-font" />
      <h2 className="font-primary-bold text-xl text-font">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="testCard-token" className="text-base text-font-subtle">
          Personal Access Token
        </label>
        <FiInfo size={18} className="text-font-subtlest" />
      </div>
      <input
        id="testCard-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="testCard-url" className="text-base text-font-subtle">
          Design URL
        </label>
        <FiInfo size={18} className="text-font-subtlest" />
      </div>
      <input
        id="testCard-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT}
      />
    </div>

    <div className="mt-10 flex items-center gap-8">
      <button type="button" className={RUST_BUTTON}>
        Awesome
      </button>
      <button type="button" className={RUST_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);

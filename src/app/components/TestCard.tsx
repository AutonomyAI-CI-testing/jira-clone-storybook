import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Self-contained smoke-test card: it reproduces a Figma frame and is not wired
// to the app or its semantic tokens, so its palette lives here as literal values.
const fieldInputClass =
  "mt-6 w-full border border-[#6b6b6b] bg-[#242424] px-7 py-5 font-primary-light text-[20px] text-[#9a9a9a] placeholder:text-[#9a9a9a]";

const fieldLabelClass = "font-primary text-[20px] text-[#d4d4d4]";

const actionButtonClass =
  "rounded-md bg-[#a34212] px-12 py-5 font-primary-bold text-[20px] text-[#a89f99]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[508px] bg-[#0f0f0f] px-10 py-10">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] text-[#f0f0f0]">
          UI magician Agent
        </h1>
        <FiSettings size={28} aria-hidden className="mt-1 text-[#d4d4d4]" />
      </div>

      <div className="mt-7 flex items-center gap-2">
        <FiChevronUp size={22} aria-hidden className="text-[#9e9e9e]" />
        <span className="font-primary-light text-[20px] text-[#9e9e9e]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-36 flex items-center gap-3">
        <FiChevronUp size={26} aria-hidden className="text-[#f0f0f0]" />
        <h2 className="font-primary-bold text-[26px] text-[#f0f0f0]">
          Add New Design
        </h2>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-access-token" className={fieldLabelClass}>
            Personal Access Token
          </label>
          <FiInfo size={22} aria-hidden className="text-[#d4d4d4]" />
        </div>
        <input
          id="test-card-access-token"
          name="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className={fieldInputClass}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-design-url" className={fieldLabelClass}>
            Design URL
          </label>
          <FiInfo size={22} aria-hidden className="text-[#d4d4d4]" />
        </div>
        <input
          id="test-card-design-url"
          name="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldInputClass}
        />
      </div>

      <div className="mt-14 flex items-center gap-9 pl-12">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-20 font-primary-bold text-[26px] text-[#f0f0f0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

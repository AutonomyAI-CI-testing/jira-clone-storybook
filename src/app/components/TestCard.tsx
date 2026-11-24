import cx from "classix";
import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

// The palette is read off the Figma frame rather than taken from the design
// tokens: the frame is a near-black panel with a rust accent, and the semantic
// token layer has no orange. Deliberate for this smoke-test component (D1a).
const iconClass = "shrink-0 text-[#e8e8e8]";

const fieldLabelClass = "text-base text-[#e8e8e8]";

const inputClass =
  "mt-3 w-full rounded border border-[#6e6e6e] px-4 py-3 font-primary text-base text-[#e8e8e8] placeholder:text-[#8b8b8b]";

// Both fields need an explicit fill: an unstyled input falls back to the
// browser's white, which is a bright box on this near-black panel.
const tokenInputClass = cx(inputClass, "bg-transparent");

const raisedInputClass = cx(inputClass, "bg-[#2b2b2b]");

const buttonClass =
  "rounded-md bg-[#a04a1b] px-8 py-3 font-primary text-lg text-[#d6cec9] hover:bg-[#8f4218] active:bg-[#7d3a15]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#121212] px-5 pb-16 pt-5 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <MdSettings aria-hidden="true" size={24} className={iconClass} />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <MdKeyboardArrowUp aria-hidden="true" size={20} className={iconClass} />
        <span className="min-w-0 truncate">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <MdKeyboardArrowUp aria-hidden="true" size={24} className={iconClass} />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-token" className={fieldLabelClass}>
            Personal Access Token
          </label>
          <MdInfoOutline aria-hidden="true" size={20} className={iconClass} />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={tokenInputClass}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className={fieldLabelClass}>
            Design URL
          </label>
          <MdInfoOutline aria-hidden="true" size={20} className={iconClass} />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={raisedInputClass}
        />
      </div>

      <div className="mt-8 flex gap-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};

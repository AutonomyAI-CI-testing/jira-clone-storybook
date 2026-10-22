import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * The frame this component reproduces is a fixed dark panel, so the root carries
 * the `dark` theme scope: every semantic token below it resolves to its dark
 * value (src/app/styles/app.css), and the panel keeps its dark surface whichever
 * theme the surrounding page is in.
 */
const PANEL_CLASSES =
  "flex w-[508px] max-w-full flex-col bg-elevation-surface px-10 pt-11 pb-40 font-primary text-font";

/**
 * The two buttons' rust fill is the one value in the frame with no matching
 * token - the nearest are --Orange800 (#974f0c) and --Red800 (#ae2a19), both
 * visibly different shades. Held here so it is a one-line change.
 */
const BUTTON_FILL = "bg-[#a3441d]";

const FIELD_CLASSES =
  "mt-6 h-16 w-full rounded-md border border-border-bold bg-background-input px-4 text-xl text-font outline-none placeholder:text-font-subtlest";

const FIELD_LABEL_CLASSES = "flex items-center gap-3 text-xl text-font";

const HEADING_CLASSES = "font-primary-bold text-2xl text-font";

export const TestCard = () => (
  <div id="testElem" className="dark">
    <div className={PANEL_CLASSES}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className={HEADING_CLASSES}>UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-font"
        >
          <FaCog size={26} aria-hidden />
        </button>
      </div>

      {/* Collapsed summary */}
      <div className="mt-8 flex items-center gap-3">
        <FaChevronUp size={16} className="shrink-0 text-font" aria-hidden />
        <span className="max-w-64 truncate font-primary-light text-lg text-font-subtlest">
          From entire frame to a single design
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-40 flex items-center gap-3">
        <FaChevronUp size={18} className="shrink-0 text-font" aria-hidden />
        <h2 className={HEADING_CLASSES}>Add New Design</h2>
      </div>

      <div className="mt-14">
        <label htmlFor="personal-access-token" className={FIELD_LABEL_CLASSES}>
          Personal Access Token
          <FaInfoCircle size={20} className="text-font-subtle" aria-hidden />
        </label>
        <input
          id="personal-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASSES}
        />

        <label htmlFor="design-url" className={`mt-7 ${FIELD_LABEL_CLASSES}`}>
          Design URL
          <FaInfoCircle size={20} className="text-font-subtle" aria-hidden />
        </label>
        <input
          id="design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASSES}
        />

        <div className="mt-11 flex justify-center gap-9">
          <button
            type="button"
            className={`h-11 w-40 rounded text-xl text-font-subtle ${BUTTON_FILL}`}
          >
            Awesome
          </button>
          <button
            type="button"
            className={`h-11 w-40 rounded text-xl text-font-subtle ${BUTTON_FILL}`}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className={`mt-20 text-xl ${HEADING_CLASSES}`}>Recent Breakdowns</h2>
    </div>
  </div>
);

export default TestCard;

import cx from "classix";

/**
 * Approximate palette read from the supplied Figma frame.
 *
 * Arbitrary values are used on purpose: `tailwind.config.js` replaces
 * `theme.colors` outright instead of extending it, so the stock Tailwind
 * palette (`bg-neutral-900`, `text-gray-400`, …) compiles to nothing here,
 * and the semantic tokens describe the product's light cobalt surfaces,
 * which this dark panel is not.
 */
const COLOR = {
  panel: "bg-[#1e1e1e]",
  field: "bg-[#2a2a2a]",
  fieldBorder: "border-[#8f8f8f]",
  heading: "text-[#f2f2f2]",
  label: "text-[#cfcfcf]",
  muted: "text-[#a8a8a8]",
  icon: "text-[#d0d0d0]",
  button: "bg-[#9c3d1e] text-[#cccccc]",
};

const FIELD = cx(
  COLOR.field,
  COLOR.fieldBorder,
  "mt-6 h-[68px] w-full rounded border-2 px-8 text-[17px]",
  COLOR.heading,
  "placeholder:text-[#a8a8a8]"
);

const BUTTON = cx(COLOR.button, "h-[53px] w-[168px] rounded text-[17px]");

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={cx("h-7 w-7 shrink-0", COLOR.icon)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="6.4" />
    <circle cx="12" cy="12" r="2.6" />
    <line x1="12" y1="5.6" x2="12" y2="3.6" />
    <line x1="16.53" y1="7.47" x2="17.94" y2="6.06" />
    <line x1="18.4" y1="12" x2="20.4" y2="12" />
    <line x1="16.53" y1="16.53" x2="17.94" y2="17.94" />
    <line x1="12" y1="18.4" x2="12" y2="20.4" />
    <line x1="7.47" y1="16.53" x2="6.06" y2="17.94" />
    <line x1="5.6" y1="12" x2="3.6" y2="12" />
    <line x1="7.47" y1="7.47" x2="6.06" y2="6.06" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("shrink-0", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={cx("h-6 w-6 shrink-0", COLOR.icon)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.2" />
    <line x1="12" y1="11" x2="12" y2="16.5" />
    <circle cx="12" cy="7.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={cx(COLOR.panel, COLOR.heading, "w-[508px] px-10 py-8")}>
    <div className="flex items-start justify-between gap-4">
      <h2 className="text-xl">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-10 flex items-center gap-4">
      <ChevronUpIcon className={cx("h-5 w-5", COLOR.icon)} />
      <span className={cx(COLOR.muted, "truncate text-[15px]")}>
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-24">
      <div className="flex items-center gap-4">
        <ChevronUpIcon className={cx("h-6 w-6", COLOR.heading)} />
        <h3 className="text-xl">Add New Design</h3>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-token" className={cx(COLOR.label, "text-[15px]")}>
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input id="test-card-token" readOnly placeholder="figd_xxxxxxxxxxxxxxxxxxxx" className={FIELD} />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className={cx(COLOR.label, "text-[15px]")}>
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input id="test-card-url" readOnly placeholder="https://www.figma.com/file/" className={FIELD} />
      </div>

      <div className="mt-14 flex gap-9">
        <button type="button" className={BUTTON}>
          Awesome
        </button>
        <button type="button" className={BUTTON}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="mt-28 text-xl">Recent Breakdowns</h3>
  </div>
);

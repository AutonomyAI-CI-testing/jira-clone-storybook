import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASS =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-5 py-4 font-primary-light text-base text-font placeholder:text-font-subtlest";

const BUTTON_CLASS =
  "rounded bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-base text-[var(--Orange200)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-font">UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={26} className="text-icon" />
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden="true" size={20} />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={20} className="text-font" />
      <h3 className="font-primary-bold text-lg text-font">Add New Design</h3>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <span className="text-base text-font">Personal Access Token</span>
      <FiInfo aria-hidden="true" size={20} className="text-icon" />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={INPUT_CLASS}
    />

    <div className="mt-8 flex items-center gap-3">
      <span className="text-base text-font">Design URL</span>
      <FiInfo aria-hidden="true" size={20} className="text-icon" />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={INPUT_CLASS}
    />

    <div className="mt-10 flex justify-center gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-lg text-font">
      Recent Breakdowns
    </h3>
  </div>
);

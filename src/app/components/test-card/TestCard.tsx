import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-5 w-full rounded border border-border-bold bg-background-input px-5 py-4 font-primary-light text-base text-font placeholder:text-font-subtle";

const BUTTON_CLASSES =
  "w-[170px] rounded bg-[var(--Orange800)] py-4 font-primary-light text-base text-font";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FiSettings size={26} aria-label="Settings" />
    </div>

    <div className="mt-4 flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={18} aria-hidden />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={18} aria-hidden />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-10">
        <label
          htmlFor="personal-access-token"
          className="font-primary-light text-base text-font-subtle"
        >
          Personal Access Token
        </label>
        <FiInfo size={22} aria-label="Personal Access Token help" />
      </div>
      <input
        id="personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSES}
      />
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-10">
        <label
          htmlFor="design-url"
          className="font-primary-light text-base text-font-subtle"
        >
          Design URL
        </label>
        <FiInfo size={22} aria-label="Design URL help" />
      </div>
      <input
        id="design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASSES}
      />
    </div>

    <div className="mt-14 ml-12 flex gap-9">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-28 font-primary-bold text-2xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

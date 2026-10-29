import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const SECTION_TITLE_CLASS = "font-primary-black text-xl text-font";
const FIELD_LABEL_CLASS = "font-primary-bold text-sm text-font-subtle";

const FIELD_CLASS =
  "h-14 w-full rounded-md border-none bg-background-input px-4 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "flex h-14 cursor-pointer items-center justify-center rounded-md bg-background-warning-bold font-primary-bold text-sm text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

export const TestCard = () => (
  <div id="testElem" className="flex justify-center bg-elevation-surface p-6">
    <div className="flex w-[440px] flex-col gap-6 rounded-md bg-elevation-surface-sunken p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className={SECTION_TITLE_CLASS}>UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex cursor-pointer items-center justify-center rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
        >
          <FiSettings size={22} />
        </button>
      </div>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2 text-left text-font-subtle hover:text-font"
      >
        <FiChevronUp size={18} className="shrink-0" />
        <span className="truncate">From entire frame to a single component</span>
      </button>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FiChevronUp size={20} className="shrink-0 text-font-subtle" />
          <h3 className={SECTION_TITLE_CLASS}>Add New Design</h3>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="testcard-access-token" className={FIELD_LABEL_CLASS}>
              Personal Access Token
            </label>
            <FiInfo size={16} className="shrink-0 text-font-subtle" />
          </div>
          <input
            id="testcard-access-token"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className={FIELD_CLASS}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="testcard-design-url" className={FIELD_LABEL_CLASS}>
              Design URL
            </label>
            <FiInfo size={16} className="shrink-0 text-font-subtle" />
          </div>
          <input
            id="testcard-design-url"
            readOnly
            placeholder="https://www.figma.com/file/"
            className={FIELD_CLASS}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Awesome
          </button>
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Prepare
          </button>
        </div>
      </div>

      <h3 className={SECTION_TITLE_CLASS}>Recent Breakdowns</h3>
    </div>
  </div>
);

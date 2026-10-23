import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASSES =
  "w-full rounded bg-background-input px-3 py-2.5 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand";

const ACCENT_BUTTON_CLASSES =
  "flex-1 rounded-md bg-background-warning-bold px-4 py-3 font-primary text-sm text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[380px] flex-col gap-6 rounded-md bg-elevation-surface-sunken p-5 text-font"
  >
    <header className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center rounded p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <IoSettingsOutline size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <IoChevronUp className="shrink-0 text-icon-subtle" size={16} />
        <span className="truncate font-primary-light text-sm text-font-subtle">
          From entire frame to a single component
        </span>
      </div>
    </header>

    <section className="flex flex-col gap-4">
      <h2 className="flex items-center gap-3 font-primary-bold text-lg">
        <IoChevronUp className="shrink-0 text-icon-subtle" size={16} />
        Add New Design
      </h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="font-primary-light text-sm text-font-subtle"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            className="text-icon-subtle"
            size={16}
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-design-url"
            className="font-primary-light text-sm text-font-subtle"
          >
            Design URL
          </label>
          <IoInformationCircleOutline
            className="text-icon-subtle"
            size={16}
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="flex gap-6">
        <button type="button" className={ACCENT_BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={ACCENT_BUTTON_CLASSES}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

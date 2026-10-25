import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_LABEL_CLASS =
  "flex items-center gap-2 font-primary-light text-base text-font-subtle";

const FIELD_INPUT_CLASS =
  "mt-3 w-full rounded-md border border-border-bold bg-transparent px-3 py-3 font-primary-light text-font placeholder:text-font-subtle";

const ACTION_BUTTON_CLASS =
  "flex-1 rounded bg-background-brand-bold px-4 py-3 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface-sunken p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
      >
        <IoSettingsOutline size={22} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <IoChevronUp
        size={16}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <IoChevronUp
        size={20}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-6">
      <label htmlFor="testElem-token" className={FIELD_LABEL_CLASS}>
        Personal Access Token
        <IoInformationCircleOutline
          size={18}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-6">
      <label htmlFor="testElem-url" className={FIELD_LABEL_CLASS}>
        Design URL
        <IoInformationCircleOutline
          size={18}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="testElem-url"
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-8 flex gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

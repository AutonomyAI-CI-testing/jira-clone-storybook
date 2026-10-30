import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "h-11 w-full rounded-sm border-none bg-background-input px-3 font-primary-light outline outline-2 outline-border-input";

const ACTION_CLASS =
  "h-11 flex-1 rounded-sm border-none bg-background-brand-bold font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[400px] rounded-md bg-elevation-surface p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-2xl text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <IoSettingsOutline aria-hidden="true" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 font-primary-light text-font-subtle">
      <IoChevronUpOutline aria-hidden="true" className="shrink-0" />
      <span className="truncate">
        From entire frame to a single component with all of its states and
        variants
      </span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <IoChevronUpOutline aria-hidden="true" className="shrink-0 text-xl" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-4 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-font-subtle">
          <label htmlFor="test-card-token">Personal Access Token</label>
          <IoInformationCircleOutline aria-hidden="true" />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-font-subtle">
          <label htmlFor="test-card-design-url">Design URL</label>
          <IoInformationCircleOutline aria-hidden="true" />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file:"
          className={FIELD_CLASS}
        />
      </div>
    </div>

    <div className="mt-6 flex gap-4">
      <button type="button" className={ACTION_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-10 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

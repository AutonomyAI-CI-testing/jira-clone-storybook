import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELD_CLASSES =
  "w-full rounded border border-border-bold bg-background-input px-3 py-2.5 text-sm text-font placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASSES =
  "rounded bg-[var(--Orange800)] px-6 py-3 font-primary-bold text-sm text-[color:var(--DarkNeutral1000)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded-full p-1 text-icon hover:bg-background-neutral"
      >
        <HiOutlineCog size={20} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <HiChevronUp size={20} className="shrink-0" />
      <h3 className="font-primary-bold text-base">Add New Design</h3>
    </div>

    <div className="mt-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="figma-token"
            className="font-primary-light text-sm text-font-subtle"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            size={18}
            className="shrink-0 text-icon"
            aria-hidden="true"
          />
        </div>
        <input
          id="figma-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="figma-url"
            className="font-primary-light text-sm text-font-subtle"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle
            size={18}
            className="shrink-0 text-icon"
            aria-hidden="true"
          />
        </div>
        <input
          id="figma-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASSES}
        />
      </div>
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h3 className="mt-10 font-primary-bold text-base">Recent Breakdowns</h3>
  </div>
);

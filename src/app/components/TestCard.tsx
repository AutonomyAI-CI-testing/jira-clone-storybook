import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASSNAME =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 text-lg text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest";

const ACTION_CLASSNAME =
  "cursor-pointer rounded-lg bg-[var(--Orange800)] px-8 py-3 text-lg text-[color:var(--DarkNeutral700)]";

/**
 * Static reproduction of the "UI magician Agent" panel from the reference Figma
 * frame. Self-contained smoke test: no props, no state and no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pb-12 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-font-subtle"
      >
        <IoSettingsOutline className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-4">
      <IoChevronUp className="h-4 w-4 shrink-0" aria-hidden />
      <span className="text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-4 pl-5">
      <IoChevronUp className="h-5 w-5 shrink-0" aria-hidden />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-2">
        <label htmlFor="test-elem-token" className="text-base">
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          className="h-4 w-4 text-font-subtle"
          aria-hidden
        />
      </div>
      <input
        id="test-elem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={INPUT_CLASSNAME}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-elem-design-url" className="text-base">
          Design URL
        </label>
        <IoInformationCircleOutline
          className="h-4 w-4 text-font-subtle"
          aria-hidden
        />
      </div>
      <input
        id="test-elem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={INPUT_CLASSNAME}
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button type="button" className={ACTION_CLASSNAME}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSNAME}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

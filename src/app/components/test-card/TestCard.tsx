import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * Figma frame. Smoke test only: no props, no data, no behaviour.
 *
 * The card is built from semantic tokens, so it takes on whichever theme it is
 * rendered in. The one literal is the accent on the two action buttons, which
 * the palette has no token for.
 */

const INPUT_CLASS =
  "mt-3 w-full rounded-sm border-2 border-border-bold bg-elevation-surface-sunken p-3 font-primary text-font placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "flex-1 cursor-pointer rounded-lg bg-[#a34a2b] px-6 py-3 font-primary text-font-inverse hover:opacity-90 active:opacity-80";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[400px] rounded-md bg-elevation-surface p-7 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded p-1 text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-8 flex w-full items-center gap-3">
      <FiChevronUp size={20} className="shrink-0" aria-hidden="true" />
      <span className="truncate text-base text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp size={24} className="shrink-0" aria-hidden="true" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-base">
          Personal Access Token
        </label>
        <FiInfo
          size={18}
          className="text-font-subtle"
          aria-hidden="true"
        />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={INPUT_CLASS}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-base">
          Design URL
        </label>
        <FiInfo size={18} className="text-font-subtle" aria-hidden="true" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={INPUT_CLASS}
      />
    </div>

    <div className="mt-10 flex gap-6">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

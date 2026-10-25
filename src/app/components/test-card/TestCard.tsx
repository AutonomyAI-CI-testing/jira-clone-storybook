import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary-light text-base text-font placeholder:text-font-subtlest";

// The design's rust fill has no semantic token — the palette's accents are the
// brand blue and the semantic red/green/yellow — so this is the one place the
// component reaches for a declared palette value.
const ACTION_BUTTON_CLASS =
  "w-[170px] rounded bg-[var(--Orange800)] px-4 py-4 font-primary text-base text-white hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test: it takes no props and nothing in it is wired up. The root pins
 * the `dark` theme class, so the card keeps the design's dark palette on its
 * own whatever theme the app around it is in.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-12 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={20} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp size={22} className="shrink-0" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2 text-font-subtle">
        <span className="font-primary-light text-base">
          Personal Access Token
        </span>
        <FiInfo size={20} className="shrink-0" />
      </div>
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2 text-font-subtle">
        <span className="font-primary-light text-base">Design URL</span>
        <FiInfo size={20} className="shrink-0" />
      </div>
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
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

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

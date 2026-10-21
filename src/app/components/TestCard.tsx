import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test panel: a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained — no props, no state, no data. The `dark` class on
 * the root scopes the dark theme's semantic tokens to this subtree, so the panel
 * reads as the dark design whatever theme the app or Storybook is in.
 *
 * The one literal below is the buttons' rust fill: this palette has no rust token.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pb-12 pt-12 font-primary-light text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings aria-hidden className="shrink-0 text-2xl text-icon" />
    </header>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-xl text-font-subtle" />
      <span className="truncate text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    {/* The frame leaves a large empty band between the two sections. */}
    <div className="h-[150px]" />

    <div className="flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-xl text-font" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <label htmlFor="test-card-token" className="flex items-center gap-3">
        <span className="font-primary text-base text-font-subtle">
          Personal Access Token
        </span>
        <FiInfo aria-hidden className="shrink-0 text-lg text-font-subtle" />
      </label>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-4 w-full rounded-sm border border-border-bold bg-background-input px-4 py-5 text-base placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-8">
      <label htmlFor="test-card-url" className="flex items-center gap-3">
        <span className="font-primary text-base text-font-subtle">
          Design URL
        </span>
        <FiInfo aria-hidden className="shrink-0 text-lg text-font-subtle" />
      </label>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-4 w-full rounded-sm border border-border-bold bg-background-input px-4 py-5 text-base placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-10 flex gap-6">
      <button
        type="button"
        className="flex-1 rounded-md bg-[#9c4415] px-6 py-5 font-primary text-base text-[#d8c7bd]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-md bg-[#9c4415] px-6 py-5 font-primary text-base text-[#d8c7bd]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

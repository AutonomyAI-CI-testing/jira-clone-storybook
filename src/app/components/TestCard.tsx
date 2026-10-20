import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * TestCard — a self-contained layout of the "UI magician Agent" Figma frame.
 * Smoke test only: no props, no state, no data behind it. Surfaces, text and
 * borders use the app's semantic tokens, scoped to the dark theme the frame is
 * drawn in, so no raw palette values are needed here.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded p-1 text-font-subtle hover:bg-background-neutral-hovered"
      >
        <IoSettingsOutline size={22} aria-hidden />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <IoChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="truncate text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <IoChevronUp size={20} className="shrink-0" aria-hidden />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-base text-font-subtle">
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          size={18}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="test-card-token"
        name="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-design-url"
          className="text-base text-font-subtle"
        >
          Design URL
        </label>
        <IoInformationCircleOutline
          size={18}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="test-card-design-url"
        name="test-card-design-url"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-8 flex gap-6">
      <button
        type="button"
        className="flex-1 rounded bg-background-brand-bold px-8 py-4 text-font-inverse hover:bg-background-brand-bold-hovered"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-background-brand-bold px-8 py-4 text-font-inverse hover:bg-background-brand-bold-hovered"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

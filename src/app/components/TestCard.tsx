import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state, no data.
 *
 * The `dark` theme class sits on the root so the card renders as the frame's
 * dark panel regardless of the surrounding theme (the app's dark tokens are
 * declared under `.dark` and Tailwind runs in `darkMode: "class"`).
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[448px] rounded-md bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    {/* Title row */}
    <div className="flex items-start justify-between gap-3">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex-center rounded-full p-1 text-font-subtlest hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={20} aria-hidden="true" />
      </button>
    </div>

    {/* Collapsed frame row */}
    <div className="mt-3 flex items-center gap-2 text-sm text-font-subtlest">
      <FiChevronUp size={16} aria-hidden="true" />
      <span className="min-w-0 truncate">
        From entire frame to a single component
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-10 flex items-center gap-2 font-primary-bold">
      <FiChevronUp size={18} aria-hidden="true" />
      <span>Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <label className="mt-5 block">
      <span className="flex items-center gap-1.5 font-primary-light text-sm text-font-subtle">
        Personal Access Token
        <FiInfo size={14} aria-hidden="true" />
      </span>
      <input
        type="text"
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="mt-1.5 w-full rounded-md border-none bg-background-input px-3 py-2.5 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </label>

    {/* Design URL */}
    <label className="mt-5 block">
      <span className="flex items-center gap-1.5 font-primary-light text-sm text-font-subtle">
        Design URL
        <FiInfo size={14} aria-hidden="true" />
      </span>
      <input
        type="text"
        name="designUrl"
        placeholder="https://www.figma.com/file:"
        className="mt-1.5 w-full rounded-md border-none bg-background-input px-3 py-2.5 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </label>

    {/* Actions */}
    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="rounded bg-background-warning-bold px-6 py-2.5 text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-background-warning-bold px-6 py-2.5 text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-10 font-primary-bold">Recent Breakdowns</div>
  </div>
);

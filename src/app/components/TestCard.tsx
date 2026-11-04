import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel.
 *
 * The frame is a fixed dark panel, so the theme is pinned on the root container
 * (the repo's documented exception for a surface that must look the same in
 * every theme). An inherited colour does not re-resolve inside a pinned
 * subtree, so each text element names its own role.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col bg-elevation-surface px-5 pt-5 pb-12 text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm text-font">
        UI magician Agent
      </span>
      <FaCog aria-hidden className="h-4 w-4 text-font-subtle" />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <FaChevronUp aria-hidden className="h-2 w-2 shrink-0 text-font-subtle" />
      <span className="truncate font-primary text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FaChevronUp aria-hidden className="h-3 w-3 shrink-0 text-font" />
      <span className="font-primary-bold text-sm text-font">
        Add New Design
      </span>
    </div>

    <label className="mt-7 block">
      <span className="flex items-center gap-2 font-primary text-2xs text-font-subtle">
        Personal Access Token
        <FaInfoCircle aria-hidden className="h-[15px] w-[15px]" />
      </span>
      <input
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-3 py-2 font-primary text-2xs text-font placeholder:text-font-subtlest"
      />
    </label>

    <label className="mt-3 block">
      <span className="flex items-center gap-2 font-primary text-2xs text-font-subtle">
        Design URL
        <FaInfoCircle aria-hidden className="h-[15px] w-[15px]" />
      </span>
      <input
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border-2 border-border-bold bg-background-input px-3 py-2 font-primary text-2xs text-font placeholder:text-font-subtlest"
      />
    </label>

    <div className="mt-5 flex gap-3">
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-2 font-primary-bold text-2xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-2 font-primary-bold text-2xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12">
      <span className="font-primary-bold text-sm text-font">
        Recent Breakdowns
      </span>
    </div>
  </div>
);

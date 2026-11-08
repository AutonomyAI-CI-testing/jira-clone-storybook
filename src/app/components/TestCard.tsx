import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" frame from Figma.
 *
 * Smoke test only: self-contained, no props, no state, no interactivity.
 * The `dark` class is pinned on the root so the card keeps its dark look in
 * every app theme, which is why the text colour is declared here as well.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-font">
          UI magician Agent
        </span>
        <HiOutlineCog
          size={16}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp
          size={10}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
        <span className="text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <HiChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
        <span className="font-primary-bold text-xs text-font">
          Add New Design
        </span>
      </div>

      <label
        htmlFor="testcard-token"
        className="mt-6 flex items-center justify-between"
      >
        <span className="text-2xs text-font-subtle">Personal Access Token</span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="testcard-token"
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 rounded border border-border-bold bg-background-input px-4 text-2xs text-font-subtlest"
      />

      <label htmlFor="testcard-url" className="mt-3 flex items-center gap-2">
        <span className="text-2xs text-font-subtle">Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="testcard-url"
        readOnly
        defaultValue="https://www.figma.com/file/:"
        className="mt-2 h-9 rounded border-2 border-border-bold bg-background-input px-4 text-2xs text-font-subtlest"
      />

      <div className="mt-5 flex justify-center gap-4">
        <button
          type="button"
          className="h-9 w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font-subtle"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font-subtle"
        >
          Prepare
        </button>
      </div>

      <span className="mt-12 font-primary-bold text-xs text-font">
        Recent Breakdowns
      </span>
    </div>
  );
};
